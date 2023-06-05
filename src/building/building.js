const { MapLocation } = require( '../map/MapLocation' )

class Building extends MapLocation
{
    constructor( positionY, positionX, isRoadAccessable, buildingTier, buildingHasWater, buildingHasElectric ) 
    {
        super( positionY, positionX, isRoadAccessable )

        this.buildingTier = buildingTier
        this.buildingHasWater = buildingHasWater
        this.buildingHasElectric = buildingHasElectric
    }

    giveBuildingWater()
    {
        this.buildingHasWater = true
    }

    giveBuildingElectric()
    {
        this.buildingHasElectric = true
    }
}

module.exports = {
    Building
}