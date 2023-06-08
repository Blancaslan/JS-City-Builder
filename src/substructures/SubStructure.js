const { MapLocation } = require('../map/MapLocation')

class SubStructure extends MapLocation {
    constructor( positionY, positionX, hasResource) {
        super( positionY, positionX )
        this.hasResource = hasResource
    }

    giveResource() {
        this.hasResource = true
    }

    deleteResource() {
        this.hasResource = false
    }

    checkResource() {
        if (this.hasResource) {
            return true
        }
        else {
            return false
        }
    }
}

module.exports = {
    SubStructure
}
