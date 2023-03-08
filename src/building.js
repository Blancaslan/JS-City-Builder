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
}

class Commercial extends Building {

    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable, buildingTier)
    }
}

class Industrial extends Building {

    constructor(positionY, positionX, isRoadAccessable, buildingTier) {
        super(positionY, positionX, isRoadAccessable, buildingTier)
    }
}

module.exports = {
    Residence,
    Commercial,
    Industrial
}