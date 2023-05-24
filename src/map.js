const prompt = require( 'prompt-sync' )();
var Building = require ( './building/buildingLib' )

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
    addindex( object ) {
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
        if ( currentLocation["structure"].constructor.name === buildingTypes[index] ) {
            let waterPipe = currentLocation.getWaterPipe()
            let electricWire = currentLocation.getElectricityWire()

            if ( waterPipe.constructor.name === "WaterPipe" && waterPipe.isWaterConnected())
                this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithWater ) 

            else if ( electricWire.constructor.name === "ElectricityWire" && electricWire.isWireConnected() )
                this.getNearbyPlotsOnMap( currentLocation, Building.setBuildingSuppliedWithElectricity ) 

            return
        }
    }
    
    // checks if there is a pipe/wire on a building
    setBuildingNecessities( positionY, positionX ) {
        let buildingTypes = ["Residence", "Commercial", "Industrial"]
        let currentLocation = this.getLocation( positionY, positionX )
        for ( let index = 0; index < buildingTypes.length; index++ )
            this.checkForBuilding( buildingTypes, currentLocation )
    }

    setAllBuildingNecessities() {
        for ( let Y = 0; Y < this.getHeight(); Y++ )
            for ( let X = 0; X < this.getWidth(); X++ )
                this.setBuildingNecessities( Y, X)
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