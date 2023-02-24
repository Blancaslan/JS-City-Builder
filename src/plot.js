module.exports = {Plot: class Plot {
    // class of a position in game with attribute of roadAccessable
    constructor(positionY, positionX, isRoadAccessable) {
        this.positionY =  positionY
        this.positionX = positionX
        this.isRoadAccessable = isRoadAccessable
    }

    addLocationData(locationY, locationX, mapLengthY, mapLengthX) {
        mapLengthX -= 1
        mapLengthY -= 1
        if (locationY == 0 || locationY == mapLengthY && locationX >= 0 && locationX <= mapLengthX) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        if (locationY >= 0 && locationY <= mapLengthY && locationX == 0 || locationX == mapLengthX) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        return false
    }
}}