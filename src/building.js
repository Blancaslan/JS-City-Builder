var Plot = require('./plot')
var RoadAccess = require('./road')
class Building extends Plot.Plot{
    // parent class for all buildings in game
    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable)
        this.buildingTier = buildingTier
    }

    showData() {
        return [this.positionY, this.positionX, this.isRoadAccessable]
    }
}

class Residence extends Building {

    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable, buildingTier)
    }

    getTax(residenceTaxChart) {
        return residenceTaxChart[this.buildingTier]
    }
}

class Commerical extends Building {

    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable, buildingTier)
    }

    getTax(commericalTaxChart) {
        return commericalTaxChart[this.buildingTier]
    }
}

class Industrial extends Building {

    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable, buildingTier)
    }

    getTax(industrialTaxChart) {
        return industrialTaxChart[this.buildingTier]
    }
}

module.exports = {
    Residence: Residence,
    Commercial: Commerical,
    Industrial: Industrial
}