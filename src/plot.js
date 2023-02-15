module.exports = {Plot: class Plot {
    // class of a position in game with attribute of roadAccessable
    constructor(positionY, positionX, isRoadAccessable) {
        this.positionY =  positionY
        this.positionX = positionX
        this.isRoadAccessable = isRoadAccessable
    }

    addLocationData(locationY, locationX) {
        if (locationY == 0 || locationY == 6 && locationX >= 0 && locationX <= 6) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        if (locationY >= 0 && locationY <= 6 && locationX == 0 || locationX == 6) {
            this.positionY = locationY
            this.positionX = locationX
            return true
        }
        return false
    }
}}