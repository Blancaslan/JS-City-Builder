const BuildingLib = require ( '../building/buildingLib' )

class Map {
    constructor( map ) {
        this.map = map
    }

    getMap() {
        return this.map
    }

    
    getHeight() {
        return this.map.length
    }
    
    getWidth() {
        return this.map[0].length
    }
    
    deleteIndex(  positionX, positionY  ) {
        this.map[positionY, positionX] = 0
    }

    // gathers a location at ( y, x ) if location exists
    getLocation( y, x ) {
        if ( !(y < 0 || x < 0) && this.map[y][x])
            return this.map[y][x]
        else
            return false
    }

    // places object on the specified location in the specified keys value
    addIndex( object ) {
        let objectLocation = this.getLocation( object.positionY, object.positionX )

        switch (object.constructor.name) {
            case "WaterPipe":
                objectLocation["WaterPipe"] = object
                return
            case "ElectricityWire":
                objectLocation["ElectricityWire"] = object
                return
            default:
                objectLocation["structure"] = object
            } 
        }

    // gatheres a plot and all plots around it from x y coords
    getNearbyPlotsOnMap( pipe, setValue ) {
        let locations = [
            this.getLocation( pipe.positionY, pipe.positionX ),
            this.getLocation( pipe.positionY, pipe.positionX - 1 ),
            this.getLocation( pipe.positionY, pipe.positionX + 1 ),
            this.getLocation( pipe.positionY - 1, pipe.positionX ),
            this.getLocation( pipe.positionY + 1, pipe.positionX )
        ]

        for (let index = 0; index < locations.length; index++) {
            if (locations[index] && BuildingLib.checkForBuilding(locations[index]))
                setValue(locations[index].getStructure())
        }
    }
     
    // checks if there are filled in properties on a plot
    activeProperties( currentLocation ) {
        let waterPipe = currentLocation.getWaterPipe()
        let electricWire = currentLocation.getElectricityWire()

        if ( waterPipe.constructor.name === "WaterPipe" && waterPipe.pipeFilled())
                this.getNearbyPlotsOnMap( currentLocation, BuildingLib.setBuildingSuppliedWithWater ) 

        if ( electricWire.constructor.name === "ElectricityWire" && electricWire.wireCharged() )
            this.getNearbyPlotsOnMap( currentLocation, BuildingLib.setBuildingSuppliedWithElectricity ) 
    }
    
    // checks if there is a building at location and if there are active properties on that building
    setBuildingNecessities( positionY, positionX ) {
        let currentLocation = this.getLocation( positionY, positionX )
        this.activeProperties( currentLocation )
    }

    // sets structures to have a resource (such as water or electric)
    setAllBuildingNecessities() {
        let mapHeight = this.getHeight()
        let mapWidth = this.getWidth()
        for ( let y = 0; y < mapHeight; y++ )
            for ( let x = 0; x < mapWidth; x++ )
                this.setBuildingNecessities( y, x )
    }

    // checks for highway object
    highwayCheck( y, x ) {
        // left
        this.perimeterCheck(  y, x - 1  )
        // right
        this.perimeterCheck(  y, x + 1  )
        // up
        this.perimeterCheck(  y - 1, x  )
        // down
        this.perimeterCheck(  y + 1, x  )

        return
    }

    // checks a nearby road (at location x and y) to see if it is an accessable road.
    perimeterCheck( y, x ) {
        try {
            if ( this.map[y][x].constructor.name === "Road" && !( this.map[y][x].isRoadAccessable ) ) {
            this.map[y][x].isRoadAccessable = true
            this.highwayCheck(  y, x  )
            return
            }
        }
        catch {return}
    }

}

module.exports = {Map}