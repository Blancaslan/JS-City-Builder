const prompt = require( 'prompt-sync' )();
var Building = require ( './building/buildingLib' )

class Map {
    constructor( map ) {
        this.map = map
    }

    getMap() {
        return this.map
    }

    getLocation( y, x ) {
        try {
            return this.map[y][x]
        }
        catch {
            return false
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

    // places object on the specified location in the specified keys value
    addindex( object ) {
        // if ( this.map[object.positionY][object.positionX] ) {
        //     if ( this.map[object.positionY][object.positionX].constructor.name === "Plot" ) {
        //         console.log(  "You cannot build over or remove the highway piece."  )
        //         return
        //     }
        //     let response = prompt(  "Something already exists here do you want to replace it? y/n"  )

        //     if ( response.toLowerCase() === "y" ) {
        //         this.map[object.positionY][object.positionX] = object
        //         return
        //     }
        //     else if ( !( response.toLowerCase() === "n" ) ) {
        //         console.log(  "That response is not in the list of commands, aborting (like your mother should have done)."  )
        //     }
        //     return 
        
        switch (object.constructor.name) {
            case "WaterPipe":
                this.map[object.positionY][object.positionX]["WaterPipe"] = object
                return
            case "ElectricityWire":
                this.map[object.positionY][object.positionX]["ElectricityWire"] = object
                return
            } 
            this.map[object.positionY][object.positionX]["structure"] = object
        }

    // checks to see if a location in an array exists
    locationExists(location) {
        if( !( location === undefined || location === 0 || location === false ) ) {
            return true
        }
        return false
    }

    // gatheres a plot and all plots around it from x y coords
    getNearbyPlotsOnMap( pipe, setValue ) {
        // let centerPlot = this.locationExistenceCheck(this.getLocation(pipe.positionY, pipe.positionX)) ? this.getLocation(pipe.positionY, pipe.positionX) : 0
        // let leftPlot = this.locationExistenceCheck(this.getLocation(pipe.positionY, pipe.positionX - 1)) ? this.getLocation(pipe.positionY, pipe.positionX - 1) : 0
        // let rightPlot = this.locationExistenceCheck(this.getLocation(pipe.positionY, pipe.positionX + 1)) ? this.getLocation(pipe.positionY, pipe.positionX + 1) : 0
        // let abovePlot = this.locationExistenceCheck(this.getLocation(pipe.positionY - 1, pipe.positionX)) ? this.getLocation(pipe.positionY - 1, pipe.positionX) : 0
        // let belowPlot = this.locationExistenceCheck(this.getLocation(pipe.positionY + 1, pipe.positionX)) ? this.getLocation(pipe.positionY + 1, pipe.positionX) : 0
        if ( this.locationExists( this.getLocation( pipe.positionY, pipe.positionX ) ) )     {setValue( this.getLocation( pipe.positionY, pipe.positionX ).getStructure() )}
        if ( this.locationExists( this.getLocation( pipe.positionY, pipe.positionX - 1 ) ) ) {setValue( this.getLocation( pipe.positionY, pipe.positionX - 1 ).getStructure() )}
        if ( this.locationExists( this.getLocation( pipe.positionY, pipe.positionX + 1 ) ) ) {setValue( this.getLocation( pipe.positionY, pipe.positionX + 1).getStructure() )}
        if ( this.locationExists( this.getLocation( pipe.positionY - 1, pipe.positionX ) ) ) {setValue( this.getLocation( pipe.positionY - 1, pipe.positionX ).getStructure() )}
        if ( this.locationExists( this.getLocation( pipe.positionY + 1, pipe.positionX ) ) ) {setValue( this.getLocation( pipe.positionY + 1, pipe.positionX ).getStructure() )}

        //return {"center": centerPlot, "left": leftPlot, "right": rightPlot, "above": abovePlot, "below": belowPlot}
    }
    
    // initializes setBuildingWaterAndElectricity in one spot and all spots around it
    setNearbyBuildingsRequirements( pipe, setValue ) {
        let plotLocations = this.getNearbyPlotsOnMap( pipe )

        // if the checkForBuilding is given an area that doesnt exist it crashes.
        
        if ( Building.checkForBuilding( plotLocations["center"] ) ) {setValue( plotLocations["center"]["structure"] )}
        if ( Building.checkForBuilding( plotLocations["left"] ) ) {setValue( plotLocations["left"]["structure"] )}
        if ( Building.checkForBuilding( plotLocations["right"] ) ) {setValue( plotLocations["right"]["structure"] )}
        if ( Building.checkForBuilding( plotLocations["above"] ) ) {setValue( plotLocations["above"]["structure"] )}
        if ( Building.checkForBuilding( plotLocations["below"] ) ) {setValue( plotLocations["below"]["structure"] )}
    }
    
    // checks if there is a pipe on a building
    setBuildingWaterAndElectricity( positionY, positionX ) {
        let buildingTypes = ["Residence", "Commercial", "Industrial"]
        let currentLocation = this.getLocation( positionY, positionX )
        for ( let index = 0; index < buildingTypes.length; index++ ) {
            if ( currentLocation["structure"].constructor.name === buildingTypes[index] ) {
                if ( currentLocation.getWaterPipe().constructor.name === "WaterPipe" ) {
                    //this.setNearbyBuildingsRequirements( currentLocation, Building.setBuildingSuppliedWithWater )
                    this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithWater ) 
                    
                }
                else if ( currentLocation.getElectricityWire().constructor.name === "ElectricityWire" ) {
                    //this.setNearbyBuildingsRequirements( currentLocation, Building.setBuildingSuppliedWithElectricity )
                    this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithElectricity ) 
                }
                return
            }
        }
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