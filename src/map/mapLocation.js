class MapLocation {
    constructor( positionY, positionX ) {

        this.positionY =  positionY
        this.positionX = positionX
    }

    getPositionY() {
        return this.positionY
    }

    getPositionX() {
        return this.positionX
    }
}

module.exports = {MapLocation}