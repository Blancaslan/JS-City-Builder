var MapLocation = require( '../map/mapLocation' )
class Building extends MapLocation.MapLocation
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

module.exports = {
    Building,
    Residence,
    Commercial,
    Industrial
}