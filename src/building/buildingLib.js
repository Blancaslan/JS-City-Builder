// gathers tax from one non-government building
function getTax( building ) {
    if ( building.buildingSuppliedWithWater === true && building.buildingSuppliedWithElectricity === true )
    {
        switch ( building.constructor.name ) 
        {
            case "Residence":
                return {1: 100, 2: 200, 3: 300}[building.buildingTier]
            case "Commercial":
                return {1: 200, 2: 400, 3: 600}[building.buildingTier]
            case "Industrial":
                return {1: 300, 2: 600, 3: 900}[building.buildingTier]
        }
    }
    return 0
}
            
// gathers taxes from all non-government buildings
function getAllTaxes( Map ) {
    let cashMoney = 0
    
    for ( let mapCoordY = 0; mapCoordY < Map.getHeight(); mapCoordY++ ) 
    {
        for ( let mapCoordX = 0; mapCoordX < Map.getWidth(); mapCoordX++ ) 
        {
            cashMoney += getTax( Map.getLocation( mapCoordY, mapCoordX )["structure"] ) 
        }
    }
    
    return cashMoney
}

function checkForBuilding( plot ) {
    if (plot.getStructure() === 0) {return false}
    let buildingTypes = ["Residence", "Commercial", "Industrial"]
    for ( let index = 0; index < buildingTypes.length; index++ ) {
        if ( plot.getStructure().constructor.name === buildingTypes[index] ) {
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

function setWater( plot ) 
{
    plot.WaterPipe.setWater()
}

function setElectric( plot )
{
    plot.ElectricityWire.setElectric()
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
    setElectric,
    getPipe,
    getWire,
    transmitProperties
}