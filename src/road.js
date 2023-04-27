var MapPlot = require('./plot')

// class for making roads
class Road extends MapPlot.MapPlot {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX, isRoadAccessable )
    }

}

module.exports = {Road}
