const { MapLocation } = require('../map/MapLocation')

class ResourceGatherers extends MapLocation
{
    constructor( positionY, positionX )
    {
        super( positionY, positionX )
    }
}

class PowerStation extends ResourceGatherers
{
    constructor( positionY, positionX )
    {
        super( positionY, positionX )
    }
}

class WaterStation extends ResourceGatherers
{
    constructor( positionY, positionX )
    {
        super( positionY, positionX )
    }
}

module.exports = {
    PowerStation,
    WaterStation
}