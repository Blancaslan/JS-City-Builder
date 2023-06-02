const { getAllTaxes } = require('../building/buildingLib')
const { userLoop, displayUI } = require('./gameLoopLib')
const { Map } = require( '../map/map' )

const mapWidth = 6
const mapHeight = 6

let map = new Map()
map.initialiseMap( mapWidth, mapHeight )

let currency = 0

setInterval(() => {
  currency += getAllTaxes( map )
  currency++
}, 200);


async function gameLoop() {
  displayUI( map, currency )

  await userLoop( map )

  setTimeout( gameLoop, 0 );
}

gameLoop()