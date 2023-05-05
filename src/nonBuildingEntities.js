var MapPlot = require('./MapPlot')

// class for making roads
class Road extends MapPlot.MapPlot {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX )
        this.isRoadAccessable = isRoadAccessable
    }

}

class WaterPipe extends MapPlot.MapPlot {
    constructor( positionY, positionX ) {
        super( positionY, positionX )
    }
}

class ElectricityWire extends MapPlot.MapPlot {
    constructor( positionY, positionX ) {
        super( positionY, positionX )
    }
}

module.exports = {Road, WaterPipe, ElectricityWire}
