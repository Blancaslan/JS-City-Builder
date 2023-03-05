var Plot = require('./plot')

// class for making roads
module.exports = {Road: class Road extends Plot.Plot {
    constructor(positionY, positionX, isRoadAccessable) {
        super(positionY, positionX, isRoadAccessable)
    }

}}
