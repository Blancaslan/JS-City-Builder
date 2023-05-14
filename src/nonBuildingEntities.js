var MapLocation = require('./mapLocation')

// class for making roads
class Road extends MapLocation.MapLocation {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX )
        this.isRoadAccessable = isRoadAccessable
    }

}

class WaterPipe extends MapLocation.MapLocation {
    constructor( positionY, positionX, hasWater ) {
        super( positionY, positionX )
        this.hasWater = hasWater
    }

    setHasWater() {
        this.hasWater = true
    }

    setHasntWater() {
        this.hasWater = false
    }

    isWaterConnected() {
        if (this.hasWater) {return true}
        return false
    }
}

class ElectricityWire extends MapLocation.MapLocation {
    constructor( positionY, positionX, hasElectricity ) {
        super( positionY, positionX, hasElectricity )
        this.hasElectricity = hasElectricity
    }

    setHasElectric() {
        this.hasWater = true
    }

    setHasntElectric() {
        this.hasWater = false
    }

    isWireConnected() {
        if (this.hasElectricity) {return true}
        return false
    }
}

module.exports = {
    Road, 
    WaterPipe, 
    ElectricityWire
}
