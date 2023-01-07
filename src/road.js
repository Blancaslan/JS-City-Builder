// Class for initializing the map and modifying
class Map {
    constructor(map) {
        this.map = map
    }

    showMap() {
        console.log(this.map)
    }

    showMapIndex(y, x) {
        if (this.map[y][x] === undefined) {
            return false
        }
        return this.map[y][x]
    }

    deleteIndex(positionX, positionY) {
        this.map[positionY, positionX] = 0
    }

    addindex(object) {
        this.map[object.positionY][object.positionX] = object
    }

}

// class for making roads and modifying them according to their surroundings
class Road {
    constructor(positionY, positionX, isRoadAccessable) {
        this.positionY = positionY
        this.positionX = positionX
        this.isRoadAccessable = isRoadAccessable
    }

    // checks if a road that is nearby is accessable and if yes then makes this road accessable
    roadCheck(map) {
        this.isRoadAccessable = (
            // checks up
            roadAccessableCheck(this.positionY, map.showMapIndex(this.positionY - 1, this.positionX), 0) ||
            // checks down
            roadAccessableCheck(this.positionY, map.showMapIndex(this.positionY + 1, this.positionX), 6) ||
            // checks left
            roadAccessableCheck(this.positionX, map.showMapIndex(this.positionY, this.positionX - 1), 0) ||
            //checks right
            roadAccessableCheck(this.positionX, map.showMapIndex(this.positionY, this.positionX + 1), 6)
        )
    }
}

function roadAccessableCheck(objectPosition, object, listIndex) {
    if (!(objectPosition === listIndex)) {
        if (object.constructor.name) {
            if (object.isRoadAccessable) {
                return true
            }
        }
    }
    return false
}


let map = new Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])

let road1 = new Road(0, 3, true)
let road2 = new Road(0, 4, false)
let road3 = new Road(0, 2, false)
let road4 = new Road(1, 3, false)
map.addindex(road1)
map.addindex(road2)
map.addindex(road3)
map.addindex(road4)

console.log(map.showMapIndex(-1, 2))

road3.roadCheck(map)

console.log(map.showMapIndex(0, 2))