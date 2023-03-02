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


map.addindex(highway)
map.addindex(road1)
map.addindex(road2)

map.highwayCheck(0, 1)