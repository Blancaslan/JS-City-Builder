const { coordinateCheck } = require('./map/mapchecks')
const { Map } = require('./map/map')

const mapWidth = 6
const mapHeight = 6

let map = new Map()
map.initialiseMap( mapWidth, mapHeight )

const x = coordinateCheck(map, 0, 'x')
const y = coordinateCheck(map, 5, 'y')
const z = coordinateCheck(map, 4, 'z')

console.log(x, y, z)