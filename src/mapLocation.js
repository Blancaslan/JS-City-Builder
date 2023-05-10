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

    addLocationData( locationY, locationX, mapLengthY, mapLengthX ) {
        mapLengthX -= 1
        mapLengthY -= 1
        if ( locationY == 0 || locationY == mapLengthY && locationX >= 0 && locationX <= mapLengthX ) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        if ( locationY >= 0 && locationY <= mapLengthY && locationX == 0 || locationX == mapLengthX ) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        return false
    }
}

module.exports = {MapLocation: MapLocation}