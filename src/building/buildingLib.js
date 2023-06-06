// gathers tax from one non-government building
function getTax( currentPlot ) {
    const structure = currentPlot["structure"]
    if (structure === undefined)
        return 0
    if ( structure.buildingHasWater=== true && structure.buildingHasElectric === true )
    {
        switch ( structure.constructor.name ) 
        {
            case "House":
                return {1: 100, 2: 200, 3: 300}[structure.buildingTier]
            case "Office":
                return {1: 200, 2: 400, 3: 600}[structure.buildingTier]
            case "Factory":
                return {1: 300, 2: 600, 3: 900}[structure.buildingTier]
        }
    }
    return 0
}
            
// gathers taxes from all non-government buildings
function getAllTax( map ) {
    let cashMoney = 0
    const mapSize = map.getMapWidthAndHeight()
    
    for ( let mapCoordY = 0; mapCoordY < mapSize["mapHeight"]; mapCoordY++ ) 
    {
        for ( let mapCoordX = 0; mapCoordX < mapSize["mapWidth"]; mapCoordX++ ) 
        {
            const currentPlot = map.getLocation( mapCoordY, mapCoordX )
            if (!(currentPlot) === false)
                cashMoney += getTax( currentPlot ) 
        }
    }
    
    return cashMoney
}

// checks if the structure in a plot is a building
function checkForStructure( currentPlot ) {
    let structureName = currentPlot.getStructure().constructor.name
    if (structureName === "House" || structureName === "Office" || structureName === "Factory")
        return true
    return false
}

function giveBuildingWater( building )
{
    building.buildingHasWater = true
}

function giveBuildingElectric( building )
{
    building.buildingHasElectric = true
}

function setWater( plot ) 
{
    plot.WaterPipe.setWater()
}

function setElectricity( plot )
{
    plot.ElectricityWire.setElectricity()
}

function getPipe( structure )
{
    return structure.getWaterPipe()
}

function getWire( structure )
{
    return structure.getElectricityWire()
}

module.exports = {
    getAllTax,
    checkForStructure,
    giveBuildingWater,
    giveBuildingElectric,
    setWater,
    setElectricity,
    getPipe,
    getWire
}