// Class for the game map
module.exports = {Map: class Map {
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

}}