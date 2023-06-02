const prompt = require('prompt');
const { Map } = require( '../map/map' )
const { userLoop, displayMap } = require('./gameLoopLib')
const { getAllTaxes } = require('../building/buildingLib')

let currency = 0
const mapWidth = 6
const mapHeight = 6

let map = new Map()
map.initialiseMap( mapWidth, mapHeight )

setInterval(() => {
  currency += getAllTaxes( map )
  currency++
}, 1000);


async function gameLoop() {
  displayMap( map )

  console.log(currency)

  await userLoop( map )

  setTimeout( gameLoop, 0 );
}


gameLoop()