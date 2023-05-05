const prompt = require( 'prompt-sync' )();
var Building = require ( './building' )

class Map {
    constructor( map ) {
        this.map = map
    }

    showMap() {
        console.log(  this.map  )
    }

    showLocationOnMap( y, x ) {
        try {
            return this.map[y][x]
        }
        catch {
            return "Error position doesn't exist, try somewhere else idiot!"
        }
    }
    
    getMapHeight() {
        return this.map.length
    }

    getMapWidth() {
        return this.map[0].length
    }

    deleteIndex(  positionX, positionY  ) {
        this.map[positionY, positionX] = 0
    }

    // places object on the specified location
    addindex( object ) {
        if ( this.map[object.positionY][object.positionX] ) {
            if ( this.map[object.positionY][object.positionX].constructor.name === "Plot" ) {
                console.log(  "You cannot build over or remove the highway piece."  )
                return
            }
            let response = prompt(  "Something already exists here do you want to replace it? y/n"  )

            if ( response.toLowerCase() === "y" ) {
                this.map[object.positionY][object.positionX] = object
                return
            }
            else if ( !( response.toLowerCase() === "n" ) ) {
                console.log(  "That response is not in the list of commands, aborting (like your mother should have done)."  )
            }
            return    
        }
        else {
            this.map[object.positionY][object.positionX] = object
        }
        
    }

    // checks if there is a building at the same location where a pipe/wire is on a different Map
    setBuildingWaterAndElectricity( aboveMap, positionY, positionX ) {
        let buildingTypes = ["Residence", "Commercial", "Industrial"]
        let currentLocation = aboveMap.showLocationOnMap(positionY, positionX )
        for (let index = 0; index < buildingTypes.length; index++) {
            if (currentLocation.constructor.name === buildingTypes[index]) {
                if (this.map[positionY][positionX].constructor.name === "WaterPipe") {
                    this.setNearbyBuildingsRequirements( aboveMap, currentLocation, Building.setBuildingSuppliedWithWater )
                }
                else if ( this.map[positionY][positionX].constructor.name === "ElectricityWire" ) {
                    this.setNearbyBuildingsRequirements( aboveMap, currentLocation, Building.setBuildingSuppliedWithElectricity )
                }
                return
            }
        }
    }

    // initializes setBuildingWaterAndElectricity in one spot and all spots around it
    setNearbyBuildingsRequirements( aboveMap, buildingAbovePipe, setValue ) {
        let plotLocations = this.getNearbyPlotsOnMap( aboveMap, buildingAbovePipe )
        // Center
        if ( Building.checkForBuilding( plotLocations["center"] ) ) {setValue(plotLocations["center"])}
        // Left
        if ( Building.checkForBuilding( plotLocations["left"] ) ) {setValue(plotLocations["left"])}
        // Right
        if ( Building.checkForBuilding( plotLocations["right"] ) ) {setValue(plotLocations["right"])}
        // Up
        if ( Building.checkForBuilding( plotLocations["above"] ) ) {setValue(plotLocations["above"])}
        // Down
        if ( Building.checkForBuilding( plotLocations["below"] ) ) {setValue(plotLocations["below"])}
    }

    getNearbyPlotsOnMap( aboveMap, buildingAbovePipe ) {
        let centerPlot = this.locationExistenceCheck(aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX)) ? aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX) : 0
        let leftPlot = this.locationExistenceCheck(aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX - 1)) ? aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX - 1) : 0
        let rightPlot = this.locationExistenceCheck(aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX + 1)) ? aboveMap.showLocationOnMap(buildingAbovePipe.positionY, buildingAbovePipe.positionX + 1) : 0
        let abovePlot = this.locationExistenceCheck(aboveMap.showLocationOnMap(buildingAbovePipe.positionY - 1, buildingAbovePipe.positionX)) ? aboveMap.showLocationOnMap(buildingAbovePipe.positionY - 1, buildingAbovePipe.positionX) : 0
        let belowPlot = this.locationExistenceCheck(aboveMap.showLocationOnMap(buildingAbovePipe.positionY + 1, buildingAbovePipe.positionX)) ? aboveMap.showLocationOnMap(buildingAbovePipe.positionY + 1, buildingAbovePipe.positionX) : 0
        return {"center": centerPlot, "left": leftPlot, "right": rightPlot, "above": abovePlot, "below": belowPlot}
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

    // checks to see if a location in an arrays index exists
    locationExistenceCheck(location) {
        if( !( location === undefined ) ) {
            return true
        }
        return false
    }
}

module.exports = {Map}