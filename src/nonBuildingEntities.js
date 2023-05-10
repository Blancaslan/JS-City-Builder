var MapLocation = require('./mapLocation')

// class for making roads
class Road extends MapLocation.MapLocation {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX )
        this.isRoadAccessable = isRoadAccessable
    }

}

class WaterPipe extends MapLocation.MapLocation {
    constructor( positionY, positionX ) {
        super( positionY, positionX )
    }
}

class ElectricityWire extends MapLocation.MapLocation {
    constructor( positionY, positionX ) {
        super( positionY, positionX )
    }
}

module.exports = {Road, WaterPipe, ElectricityWire}
