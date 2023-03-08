const prompt = require('prompt-sync')();
var Map = require("./map")
var Road = require("./road")
var Plot = require("./plot")
var Building = require("./building")

let map = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])
    
let house1 = new Building.Residence(4, 3, false, 3)
let office1 = new Building.Commercial(6, 2, false, 1)

let highway = new Plot.Plot(0, 1, true)
let road1 = new Road.Road(0, 2, false)
let road2 = new Road.Road(0, 0, false)
let road3 = new Road.Road(1, 1, false)
let road4 = new Road.Road(2, 1, false)
let road5 = new Road.Road(2, 2, false)
let road6 = new Road.Road(2, 4, false)


map.addindex(highway)
map.addindex(road1)
map.addindex(road2)
map.addindex(road3)
map.addindex(road4)
map.addindex(road5)
map.addindex(road6)

map.showMap()
console.log("\n\n\n\n")
map.highwayCheck(highway.getPositionY(), highway.getPositionX())
map.showMap()