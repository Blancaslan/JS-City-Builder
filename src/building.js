var Plot = require('./plot')
var RoadAccess = require('./road')
class Building extends Plot.Plot{
    // class for all buildings in game
    constructor(positionY, positionX, isRoadAccessable) {
        super(positionY, positionX, isRoadAccessable)
    }

    showData() {
        return [this.positionY, this.positionX, this.isRoadAccessable]
    }
}