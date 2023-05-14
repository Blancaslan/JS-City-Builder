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
    
    for ( let mapCoordY = 0; mapCoordY < Map.map.length; mapCoordY++ ) 
    {
        for ( let mapCoordX = 0; mapCoordX < Map.map[mapCoordY].length; mapCoordX++ ) 
        {
            cashMoney += getTax( Map.map[mapCoordY][mapCoordX]["structure"] ) 
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

function setPipeWater( plot ) 
{
    plot.WaterPipe.setHasWater()
}

function setWireElectric( wire )
{
    wire.setHasWire()
}

function getPipe( structure )
{
    return structure.getWaterPipe()
}

function getWire( structure )
{
    return structure.getElectricityWire()
}

// gives a pipe water
function transmitProperty( structure, getFunction, setFunction ) {
    if ( !( structure === false ) && !(getFunction( structure ) === 0 ) ) {
        setFunction( structure )
    }
}
// spreads water from pump/pipe to nearby pipes
function transmitProperties( map, structure, getFunction, setFunction ) {
    transmitProperty( map.getLocation(structure.positionY, structure.positionX), getFunction, setFunction )
    transmitProperty( map.getLocation(structure.positionY, structure.positionX - 1), getFunction, setFunction )
    transmitProperty( map.getLocation(structure.positionY, structure.positionX + 1), getFunction, setFunction )
    transmitProperty( map.getLocation(structure.positionY - 1, structure.positionX), getFunction, setFunction )
    transmitProperty( map.getLocation(structure.positionY + 1, structure.positionX), getFunction, setFunction )
}

module.exports = {
    getAllTaxes,
    checkForBuilding,
    setBuildingSuppliedWithWater,
    setBuildingSuppliedWithElectricity,
    setPipeWater,
    setWireElectric,
    getPipe,
    getWire,
    transmitProperties
}