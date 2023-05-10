var MapLocation = require( '../mapLocation' )
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

module.exports = {
    Residence,
    Commercial,
    Industrial
}