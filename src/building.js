var MapPlot = require( './MapPlot' )
class Building extends MapPlot.MapPlot
{
    constructor( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity ) 

    {
        super( positionY, positionX, isRoadAccessable )

        this.buildingTier = buildingTier
        this.buildingSuppliedWithWater = buildingSuppliedWithWater
        this.buildingSuppliedWithElectricity = buildingSuppliedWithElectricity
    }

    showData() 
    {
        return [this.positionY, this.positionX, this.isRoadAccessable]
    }

    setBuildingSuppliedWithWater()
    {
        this.buildingSuppliedWithWater = true
    }

    setBuildingSuppliedWithElectricity()
    {
        this.buildingSuppliedWithElectricity = true
    }
}

class Residence extends Building 
{

    constructor( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity ) 

    {
        super( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity )
    }
}

class Commercial extends Building 
{

    constructor( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity ) 

    {
        super( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity )
    }
}

class Industrial extends Building 
{

    constructor( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity )

    {
        super( positionY, positionX, isRoadAccessable, buildingTier, buildingSuppliedWithWater, buildingSuppliedWithElectricity )
    }
}

class Government extends Building 
{

    constructor( positionY, positionX, isRoadAccessable, taxCost, radius )

    {
        super( positionY, positionX, isRoadAccessable )

        this.taxCost = taxCost
        this.radius = radius
    }
}

class powerStation extends Government
{
    constructor( positionY, positionX, isRoadAccessable, taxCost, radius )
    {
        super( positionY, positionX, isRoadAccessable, taxCost, radius )
    }
}

class WaterStation extends Government
{
    constructor( positionY, positionX, isRoadAccessable, taxCost, radius )
    {
        super( positionY, positionX, isRoadAccessable, taxCost, radius )
    }
}


// gathers tax from one non-government building
function getTax( currentBuildingGivingTax ) {
    if ( currentBuildingGivingTax.buildingSuppliedWithWater === true && currentBuildingGivingTax.buildingSuppliedWithElectricity === true )
    {
        switch ( currentBuildingGivingTax.constructor.name ) 
        {
            case "Residence":
                return {1: 100, 2: 200, 3: 300}[currentBuildingGivingTax.buildingTier]
            case "Commercial":
                return {1: 200, 2: 400, 3: 600}[currentBuildingGivingTax.buildingTier]
            case "Industrial":
                return {1: 300, 2: 600, 3: 900}[currentBuildingGivingTax.buildingTier]
        }
    }
    return 0
}
            
// gathers taxes from all non-government buildings
function getAllTaxes( Map ) {
    let cashMoney = 0
    
    for ( let mapCoordY = 0; mapCoordY < Map.map.length; mapCoordY++ ) 
    {
        for ( let mapCoordX = 0; mapCoordX < Map.map[mapCoordY].length; mapCoordX++ ) 
        {
            cashMoney += getTax( Map.map[mapCoordY][mapCoordX] ) 
        }
    }
    
    return cashMoney
}
// function to spend taxes on government buildings, not currently operating
function useAllTaxes( gameMap ) {
    let cashMoney = 0

    for ( let y = 0; y < this.map.length; y++ )

        for ( let x = 0; x < this.map[y].length; x++ )

        switch ( gameMap.map[y][x].constructor.name ) 
        {
            case "Residence":
                cashMoney += {1: 100, 2: 200, 3: 300}[gameMap.map[y][x].buildingTier]
                break
            case "Commercial":
                cashMoney += {1: 200, 2: 400, 3: 600}[gameMap.map[y][x].buildingTier]
                break
            case "Industrial":
                cashMoney += {1: 300, 2: 600, 3: 900}[gameMap.map[y][x].buildingTier]
        }

    return cashMoney
}

function checkForBuilding( plot ) {
    let buildingTypes = ["Residence", "Commercial", "Industrial"]
    for (let index = 0; index < buildingTypes.length; index++) {
        if (plot.constructor.name === buildingTypes[index]) {
            return true
        }
    }
    return false
}

function setBuildingSuppliedWithWater( building )
{
    building.buildingSuppliedWithWater = true
}

function setBuildingSuppliedWithElectricity( building )
{
    building.buildingSuppliedWithElectricity = true
}

module.exports = {
    Residence,
    Commercial,
    Industrial,
    getAllTaxes,
    checkForBuilding,
    setBuildingSuppliedWithWater,
    setBuildingSuppliedWithElectricity
}