const prompt = require('prompt-sync')();
var Map = require("./map")
var Road = require("./road")
var Plot = require("./plot")
var Building = require("./building")

let balance = 0

let residences = {1: 100, 2: 200, 3: 300}
let commercials = {1: 200, 2: 400, 3: 600}
let industrials = {1: 300, 2: 600, 3: 900}

let house1 = new Building.Residence(0, 0, false, 1)
let office1 = new Building.Commercial(0, 0, false, 1)

console.log(house1.getTax(residences))
console.log(office1.getTax())

let map = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])

let highway = new Plot.Plot(0, 3, true)

// let posX = prompt("Input X: ")
// let posY = prompt("Input Y: ")
// console.log(highway.addLocationData(posY, posX, map.getMapHeight(), map.getMapWidth()))
// while (!(highway.addLocationData(posY, posX, map.getMapHeight(), map.getMapWidth()))) {
//     posX = prompt("Input X: ")
//     posY = prompt("Input Y: ")
// }

// while addLocation(posY, posX) returns false

let road1 = new Road.Road(0, 3, false)
let road2 = new Road.Road(0, 4, false)
let road3 = new Road.Road(0, 2, false)
let road4 = new Road.Road(1, 3, false)
let road5 = new Road.Road(2, 3, false)
let road6 = new Road.Road(3, 3, true)

map.addindex(road1)
map.addindex(road2)
map.addindex(road3)
map.addindex(road4)
map.addindex(road5)
map.addindex(road6)

console.log(map.showMapIndex(0, 3))
console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))
console.log(map.showMapIndex(2, 3))
console.log(map.showMapIndex(3, 3))

road1.roadCheck(map)
road2.roadCheck(map)
road3.roadCheck(map)
road4.roadCheck(map)
road5.roadCheck(map)
road6.roadCheck(map)

console.log(map.showMapIndex(0, 3))
console.log(map.showMapIndex(0, 4))
console.log(map.showMapIndex(0, 2))
console.log(map.showMapIndex(1, 3))
console.log(map.showMapIndex(2, 3))
console.log(map.showMapIndex(3, 3))