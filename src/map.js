const prompt = require( 'prompt-sync' )();

class Map {
    constructor( map ) {
        this.map = map
    }

    showMap() {
        console.log(  this.map  )
    }

    showIndexOnMap( y, x ) {
        try {
            return this.map[y][x]
        }
        catch {
            return "Error position doesn't exist, try somewhere else idiot!"
        }
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

    getMapHeight() {
        return this.map.length
    }

    getMapWidth() {
        return this.map[0].length
    }

    // gathers taxes from all non-government buildings
    getAllTaxes() {
        let cashMoney = 0
        let mapCoordY = 0;
        let mapCoordX = 0;
        let currentBuildingGivingTax = undefined;

        for ( mapCoordY = 0; mapCoordY < this.map.length; mapCoordY++ ) 
        {
            for ( mapCoordX = 0; mapCoordX < this.map[mapCoordY].length; mapCoordX++ ) 
            {
                currentBuildingGivingTax = this.map[mapCoordY][mapCoordX]
        
                if ( currentBuildingGivingTax.buildingSuppliedWithWater === true && currentBuildingGivingTax.buildingSuppliedWithElectricity === true )
                {
                    switch ( currentBuildingGivingTax.constructor.name ) 
                    {
                        case "Residence":
                            cashMoney += {1: 100, 2: 200, 3: 300}[currentBuildingGivingTax.buildingTier]
                            break
                        case "Commercial":
                            cashMoney += {1: 200, 2: 400, 3: 600}[currentBuildingGivingTax.buildingTier]
                            break
                        case "Industrial":
                            cashMoney += {1: 300, 2: 600, 3: 900}[currentBuildingGivingTax.buildingTier]
                    }
                }
            }
        }

        return cashMoney
    }

    // function to spend taxes on government buildings
    useAllTaxes() {
        let cashMoney = 0

        for ( let y = 0; y < this.map.length; y++ )

            for ( let x = 0; x < this.map[y].length; x++ )

            switch ( this.map[y][x].constructor.name ) 
            {
                case "Residence":
                    cashMoney += {1: 100, 2: 200, 3: 300}[this.map[y][x].buildingTier]
                    break
                case "Commercial":
                    cashMoney += {1: 200, 2: 400, 3: 600}[this.map[y][x].buildingTier]
                    break
                case "Industrial":
                    cashMoney += {1: 300, 2: 600, 3: 900}[this.map[y][x].buildingTier]
            }

        return cashMoney
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