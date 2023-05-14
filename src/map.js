const prompt = require( 'prompt-sync' )();
var Building = require ( './building/buildingLib' )

class Map {
    constructor( map ) {
        this.map = map
    }

    getMap() {
        return this.map
    }

    // checks to see if a location in an array exists
    locationExists(y, x) {
        let location = this.map[y][x]
        if( !( location === undefined || location === 0 || location === false ) ) {
            return true
        }
        return false
    }

    // gathers a location at ( y, x ) if location exists
    getLocation( y, x ) {
        // if (this.locationExists(y, x)) {
        //     return this.map[y][x]
        // }
        if (y < 0 || x < 0) {return false}
        if (this.map[y][x]) {
            return this.map[y][x]
        }
        else {
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


    // gatheres a plot and all plots around it from x y coords
    getNearbyPlotsOnMap( pipe, setValue ) {
        if ( this.getLocation( pipe.positionY, pipe.positionX ) )     {setValue( this.getLocation( pipe.positionY, pipe.positionX ).getStructure() )}
        if ( this.getLocation( pipe.positionY, pipe.positionX - 1 ) ) {setValue( this.getLocation( pipe.positionY, pipe.positionX - 1 ).getStructure() )}
        if ( this.getLocation( pipe.positionY, pipe.positionX + 1 ) ) {setValue( this.getLocation( pipe.positionY, pipe.positionX + 1).getStructure() )}
        if ( this.getLocation( pipe.positionY - 1, pipe.positionX ) ) {setValue( this.getLocation( pipe.positionY - 1, pipe.positionX ).getStructure() )}
        if ( this.getLocation( pipe.positionY + 1, pipe.positionX ) ) {setValue( this.getLocation( pipe.positionY + 1, pipe.positionX ).getStructure() )}
    }
    
    // checks if there is a building at a location
    checkForBuilding( buildingTypes, currentLocation ) {
        for ( let index = 0; index < buildingTypes.length; index++ ) {
            if ( currentLocation["structure"].constructor.name === buildingTypes[index] ) {
                let waterPipe = currentLocation.getWaterPipe()
                let electricWire = currentLocation.getElectricityWire()
                if ( waterPipe.constructor.name === "WaterPipe" && waterPipe.isWaterConnected()) {
                    this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithWater ) 
                    
                }
                else if ( electricWire.constructor.name === "ElectricityWire" && electricWire.isWireConnected() ) {
                    this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithElectricity ) 
                }
                return
            }
        }
    }
    
    // checks if there is a pipe on a building
    setBuildingWaterAndElectricity( positionY, positionX ) {
        let buildingTypes = ["Residence", "Commercial", "Industrial"]
        let currentLocation = this.getLocation( positionY, positionX )
        this.checkForBuilding( buildingTypes, currentLocation )
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