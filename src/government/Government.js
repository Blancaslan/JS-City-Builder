const { Building } = require('../building/Building')

class Government extends Building
{
    constructor( positionY, positionX, isRoadAccessable, taxCost, radius )
    {
        super( positionY, positionX, isRoadAccessable )

        this.taxCost = taxCost
        this.radius = radius
    }
}

module.exports = {
    Government
}