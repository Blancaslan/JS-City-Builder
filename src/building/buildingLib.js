// gathers tax from one non-government building
function getTax( plot ) {
    const structure = plot["structure"]
    if (structure === undefined)
        return 0
    if ( structure.buildingSuppliedWithWater === true && structure.buildingSuppliedWithElectricity === true )
    {
        switch ( structure.constructor.name ) 
        {
            case "Residence":
                return {1: 100, 2: 200, 3: 300}[structure.buildingTier]
            case "Commercial":
                return {1: 200, 2: 400, 3: 600}[structure.buildingTier]
            case "Industrial":
                return {1: 300, 2: 600, 3: 900}[structure.buildingTier]
        }
    }
    return 0
}
            
// gathers taxes from all non-government buildings
function getAllTaxes( map ) {
    let cashMoney = 0
    let mapHeight = map.getHeight()
    let mapWidth = map.getWidth()
    
    for ( let mapCoordY = 0; mapCoordY < mapHeight; mapCoordY++ ) 
    {
        for ( let mapCoordX = 0; mapCoordX < mapWidth; mapCoordX++ ) 
        {
            const location = map.getLocation( mapCoordY, mapCoordX )
            if (!(location) === false)
                cashMoney += getTax( location ) 
        }
    }
    
    return cashMoney
}

// checks if the structure in a plot is a building
function checkForBuilding( currentLocation ) {
    let locationStructureName = currentLocation.getStructure().constructor.name
        if (locationStructureName === "Residence" || locationStructureName === "Commercial" || locationStructureName === "Industrial")
        return true
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

// gives an object a resource
function transmitProperty( structure, getFunction, setFunction ) {
    if ( !( structure === false ) && !(getFunction( structure ) === 0 ) ) {
        setFunction( structure )
    }
}

// spreads resources from object to nearby objects
function transmitProperties( map, structure, getFunction, setFunction ) {
    let locations = [
        map.getLocation(structure.positionY, structure.positionX),
        map.getLocation(structure.positionY, structure.positionX - 1), 
        map.getLocation(structure.positionY, structure.positionX + 1), 
        map.getLocation(structure.positionY - 1, structure.positionX), 
        map.getLocation(structure.positionY + 1, structure.positionX)
    ]

    for (let index = 0; index < locations.length; index++)
        transmitProperty( locations[index], getFunction, setFunction )
}

module.exports = {
    getAllTaxes,
    checkForBuilding,
    setBuildingSuppliedWithWater,
    setBuildingSuppliedWithElectricity,
    setWater,
    setElectricity,
    getPipe,
    getWire,
    transmitProperties
}