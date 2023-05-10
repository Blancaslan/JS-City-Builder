const MapLocation = require("./mapLocation");

class MapPlot extends MapLocation.MapLocation {
    constructor( positionY, positionX, structure, WaterPipe, ElectricityWire ) {
        super( positionY, positionX )
        this.structure = structure
        this.WaterPipe = WaterPipe
        this.ElectricityWire = ElectricityWire
    }

    getLocation() {
        return [this.positionY, this.positionX]
    }

    getStructure() {
        return this.structure
    }

    getWaterPipe() {
        return this.WaterPipe
    }

    getElectricityWire() {
        return this.ElectricityWire
    }

}

module.exports = {MapPlot: MapPlot}