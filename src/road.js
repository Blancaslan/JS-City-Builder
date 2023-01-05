class Road {
    constructor(positionY, positionX, isRoadAccessable) {
        this.positionX = positionX
        this.positionY = positionY
        this.isRoadAccessable = isRoadAccessable
    }

    roadCheck(plot) {
        this.isRoadAccessable = (
            roadAccessableCheck(plot[this.positionY][this.positionX - 1]) || 
            roadAccessableCheck(plot[this.positionY][this.positionX + 1]) ||
            roadAccessableCheck(plot[this.positionY - 1][this.positionX]) ||
            roadAccessableCheck(plot[this.positionY + 1][this.positionX]))
    }
}

function roadAccessableCheck(object) {
    if (object.constructor.name) {
        if (object.isRoadAccessable) {
            return true
        }
    }
    return false
}

let road1 = new Road(4, 3, false)
let road2 = new Road(3, 3, true)

let plot = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

plot[road1.positionY][road1.positionX]
plot[road2.positionY][road2.positionX]
console.log(road1)
road1.roadCheck(plot)
console.log(road1)
