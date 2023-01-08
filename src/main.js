var Map = require("./map")
var Road = require("./road")

let map = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])

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