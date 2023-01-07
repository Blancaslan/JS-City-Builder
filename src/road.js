// Class for the map; to show data, to give data to and to alter data
class Map {
    constructor(map) {
        this.map = map
    }

    showMap() {
        console.log(this.map)
    }

    showMapIndex(y, x) {
        try {
            return this.map[y][x]
        }
        catch {
            return "Error position doesn't exist, try somewhere else idiot!"
        }
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

    // checks if a road nearby is accessable then makes this road accessable
    roadCheck(map) {
        this.isRoadAccessable = (
            // checks up
            roadAccessableCheck(map.showMapIndex(this.positionY - 1, this.positionX), 0) ||
            // checks down
            roadAccessableCheck(map.showMapIndex(this.positionY + 1, this.positionX), 6) ||
            // checks left
            roadAccessableCheck(map.showMapIndex(this.positionY, this.positionX - 1), 0) ||
            //checks right
            roadAccessableCheck(map.showMapIndex(this.positionY, this.positionX + 1), 6)
        )
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

console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))

road2.roadCheck(map)
road3.roadCheck(map)
road4.roadCheck(map)

console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))