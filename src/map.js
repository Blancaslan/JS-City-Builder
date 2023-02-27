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
        let cashMoney = 0
        let residences = {1: 100, 2: 200, 3: 300}
        let commercials = {1: 200, 2: 400, 3: 600}
        let industrials = {1: 300, 2: 600, 3: 900}

        for (let y = 0; y < this.map.length; y++)
            for (let x = 0; x < this.map[y].length; x++)
            switch (this.map[y][x].constructor.name) {
                case "Residence":
                    cashMoney += residences[this.map[y][x].buildingTier]
                    break
                case "Commercial":
                    cashMoney += commercials[this.map[y][x].buildingTier]
                    break
                case "Industrial":
                    cashMoney += industrials[this.map[y][x].buildingTier]
            }
        return cashMoney
    }

    highwayCheck(highwayLocation) {
        console.log(this.map[highwayLocation[0]][highwayLocation[1]])
    }

}}