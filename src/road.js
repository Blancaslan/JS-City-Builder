var Plot = require('./plot')

// class for making roads
module.exports = {Road: class Road extends Plot.Plot {
    constructor(positionY, positionX, isRoadAccessable) {
        super(positionY, positionX, isRoadAccessable)
    }

    // checks if a road nearby is accessable then makes this road accessable
    roadCheck(map) {
        this.isRoadAccessable = (
            // checks up
            roadAccessableCheck(map.showMapIndex(this.positionY - 1, this.positionX)) ||
            // checks down
            roadAccessableCheck(map.showMapIndex(this.positionY + 1, this.positionX)) ||
            // checks left
            roadAccessableCheck(map.showMapIndex(this.positionY, this.positionX - 1)) ||
            //checks right
            roadAccessableCheck(map.showMapIndex(this.positionY, this.positionX + 1))
        )
    }
}}

// make high-way check for a road on each side and when a road is found change that road to roadAccessable, then make that road do roadcheck

function roadAccessableCheck(object) {
    if (object.constructor.name) {
        if (object.isRoadAccessable) {
            return true
        }
    }
    return false
}