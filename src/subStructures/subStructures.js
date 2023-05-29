const { MapLocation } = require('../map/mapLocation')


class WaterPipe extends MapLocation {
    constructor( positionY, positionX, hasWater ) {
        super( positionY, positionX )
        this.hasWater = hasWater
    }
    
    setWater() {
        this.hasWater = true
    }
    
    setHasntWater() {
        this.hasWater = false
    }
    
    pipeFilled() {
        if (this.hasWater) 
            return true
        return false
    }
}

class ElectricityWire extends MapLocation {
    constructor( positionY, positionX, hasElectricity ) {
        super( positionY, positionX, hasElectricity )
        this.hasElectricity = hasElectricity
    }
    
    setElectricity() {
        this.hasElectricity = true
    }
    
    setHasntElectric() {
        this.hasWater = false
    }
    
    wireCharged() {
        if (this.hasElectricity) {return true}
        return false
    }
}

// class for making roads
class Road extends MapLocation {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX )
        this.isRoadAccessable = isRoadAccessable
    }

}

module.exports = {
    Road, 
    WaterPipe, 
    ElectricityWire
}
