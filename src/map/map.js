const BuildingLib = require( '../building/buildinglib' )
const { structureMap } = require('./mapLib')

class Map {
    constructor( mapWidth, mapHeight ) {
        this.mapWidth = mapWidth
        this.mapHeight = mapHeight
        this.map = []
    }

    // creates empty plots on the map
    initialiseMap() {
        structureMap( this.map, this.mapWidth, this.mapHeight )
    }

    getMap() {
        return this.map
    }

    getWidth() {
        return this.mapWidth
    }

    getHeight() {
        return this.mapHeight
    }
    

    getMapWidthAndHeight() {
        return {"mapWidth": this.mapWidth, "mapHeight": this.mapHeight}
    }

    // gathers a location at ( y, x ) if location exists
    getLocation( y, x ) {
        if (this.widthHeightCheck( y, x ))
            return this.map[y][x]
        else
            return false
    }

    widthHeightCheck( y, x ) {
        const mapSize = this.getMapWidthAndHeight()

        if (y < 0 || y > mapSize["mapHeight"]) {
            return false
        }
        else if (x < 0 || x > mapSize["mapWidth"]) {
            return false
        }
        else {
            return true
        }
    }

    // places object on the specified location in the specified keys value
    addIndex( object ) {
        if ( object === undefined ) {
            console.log("Building is invalid")
            return false
        }
        let objectLocation = this.getLocation( object.positionY, object.positionX )
        if (!objectLocation) {
            console.log("Building placement is invalid")
            return false
        }

        switch (object.constructor.name) {
            case "WaterPipe":
                objectLocation["waterPipe"] = object
                return
            case "ElectricWire":
                objectLocation["electricWire"] = object
                return
            default:
                objectLocation["structure"] = object
            } 
        }

    // gather plots next to target plot
    getNearbyPlots( currentPlot ) {
        let locations = [
            currentPlot,
            this.getLocation( currentPlot.positionY, currentPlot.positionX - 1 ),
            this.getLocation( currentPlot.positionY, currentPlot.positionX + 1 ),
            this.getLocation( currentPlot.positionY - 1, currentPlot.positionX ),
            this.getLocation( currentPlot.positionY + 1, currentPlot.positionX )
        ]

        return locations
    }

    // checks if nearby plots have a structure and gives resources to said structure
    getNearbyPlotsOnMap( currentPlot, setValue ) {
        const locations = this.getNearbyPlots( currentPlot )

        for (let index = 0; index < locations.length; index++) {
            if (locations[index] && BuildingLib.checkForStructure(locations[index]))
                setValue(locations[index].getStructure())
        }
    }
     
    // checks if a plot has substructures and those substructures have resources
    subStructureCheck( currentPlot ) {
        if (currentPlot.hasWaterPipe()) {
            let waterPipe = currentPlot.getWaterPipe()
            waterPipe.giveResource()

            if (waterPipe.checkResource())
                this.getNearbyPlotsOnMap( currentPlot, BuildingLib.giveBuildingWater ) 
        }

        if (currentPlot.hasElectricWire()) {
            let electricWire = currentPlot.getElectricityWire()

            if (electricWire.checkResource() )
                this.getNearbyPlotsOnMap( currentPlot, BuildingLib.giveBuildingElectric ) 
        }
    }
    
    // checks if there is a building at location and if there are active properties on that building
    setBuildingsResources( positionY, positionX ) {
        let currentPlot = this.getLocation( positionY, positionX )
        if (currentPlot) {
            this.subStructureCheck( currentPlot )
        }
    }

    // gives structures resources such as water or electric
    setAllBuildingsResources() {
        const mapSize = this.getMapWidthAndHeight()
        for ( let y = 0; y < mapSize["mapHeight"]; y++ )
            for ( let x = 0; x < mapSize["mapWidth"]; x++ )
                this.setBuildingsResources( y, x )
    }
}

module.exports = {Map}