const prompt = require('prompt-sync')();
var Map = require("./map")
var Road = require("./road")
var Building = require("./building")
var Plot = require("./plot")

let map = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])

let highway = new Plot.Plot(0, 0, true)

let posX = prompt("Input X: ")
let posY = prompt("Input Y: ")
console.log(highway.addLocationData(posY, posX))
while (!(highway.addLocationData(posY, posX))) {
    posX = prompt("Input X: ")
    posY = prompt("Input Y: ")
}

// while addLocation(posY, posX) returns false

map.addindex(highway)

console.log(map.showMapIndex())

let road1 = new Road.Road(0, 3, false)
let road2 = new Road.Road(0, 4, false)
let road3 = new Road.Road(0, 2, false)
let road4 = new Road.Road(1, 3, true)

map.addindex(road1)
map.addindex(road2)
map.addindex(road3)
map.addindex(road4)

console.log(map.showMapIndex(0, 3))
console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))

road1.roadCheck(map)
road2.roadCheck(map)
road3.roadCheck(map)
road4.roadCheck(map)

console.log(map.showMapIndex(0, 3))
console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))