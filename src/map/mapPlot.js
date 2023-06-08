const { MapLocation } = require("./MapLocation");

class MapPlot extends MapLocation {
    constructor( positionY, positionX, structure, waterPipe, electricWire ) {
        super( positionY, positionX )
        this.structure = structure
        this.waterPipe = waterPipe
        this.electricWire = electricWire
    }

    getLocation() {
        return [this.positionY, this.positionX]
    }

    getStructure() {
        if (this.structure === undefined) {
            return false
        }
        else {
            return this.structure
        }
    }

    getWaterPipe() {
        return this.waterPipe
    }

    getElectricityWire() {
        return this.electricWire
    }

    getSubStructures() {
        return [this.getWaterPipe(), this.getElectricityWire()]
    }

    hasWaterPipe() {
        if (!(this.waterPipe === undefined)) {
            return true
        }
        else {
            return false
        }
    }

    hasElectricWire() {
        if (!(this.electricWire === undefined)) {
            return true
        }
        else {
            return false
        }
    }

}

module.exports = {
    MapPlot
}