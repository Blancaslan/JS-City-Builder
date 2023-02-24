const prompt = require('prompt-sync')();

module.exports = {Map: class Map {
    // class to make the game map
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
        if (this.map[object.positionY][object.positionX]) {
            if (this.map[object.positionY][object.positionX].constructor.name === "Plot") {
                console.log("You cannot build over or remove the highway piece.")
                return
            }
            let response = prompt("Something already exists here do you want to replace it? y/n")
            if (response.toLowerCase() === "y") {
                this.map[object.positionY][object.positionX] = object
                return
            }
            else if (!(response.toLowerCase() === "n")) {
                console.log("That response is not in the list of commands, aborting (like your mother should have done.)")
            }
            return    
        }
        else {
            console.log("Placing object.")
            this.map[object.positionY][object.positionX] = object
        }
        
    }

    getMapHeight() {
        return this.map.length
    }

    getMapWidth() {
        return this.map[0].length
    }

    getAllTaxes() {
        for (let y = 0; y < this.map.length; y++)
            for (let x = 0; x < this.map[y].length; x++)
    }

}}