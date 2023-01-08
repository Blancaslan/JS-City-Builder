var Plot = require('./plot')
class Building extends Plot.Plot{
    constructor(positionY, positionX, isRoadAccessable) {
        super(positionY, positionX, isRoadAccessable)
    }

    showData() {
        return [this.positionY, this.positionX, this.isRoadAccessable]
    }
}