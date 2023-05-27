const { Government } = require('./Government')

class PowerStation extends Government
{
    constructor( positionY, positionX, taxCost, radius )
    {
        super( positionY, positionX, taxCost, radius )
    }
}

class WaterStation extends Government
{
    constructor( positionY, positionX, taxCost, radius )
    {
        super( positionY, positionX, taxCost, radius )
    }
}

module.exports = {
    PowerStation,
    WaterStation
}