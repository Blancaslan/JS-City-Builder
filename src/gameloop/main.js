const prompt = require('prompt');
const { Map } = require( '../map/map' )
// const Building = require( './building/Building' )
// const BuildingLib = require('./building/buildingLib')
// const MapPlot = require('./map/mapPlot')
const { userLoop, displayMap } = require('./gameLoopLib')

let counter = 0;
let exitGame = false;

prompt.message = ""
prompt.delimiter = ""

prompt.start()

const intervalID = setInterval(() => {
  counter++;
}, 100);

// let map = new Map.Map([
//     [new MapPlot.MapPlot(0, 0, 0, 0, 0), new MapPlot.MapPlot(0, 1, 0, 0, 0), new MapPlot.MapPlot(0, 2, 0, 0, 0), new MapPlot.MapPlot(0, 3, 0, 0, 0), new MapPlot.MapPlot(0, 4, 0, 0, 0), new MapPlot.MapPlot(0, 5, 0, 0, 0), new MapPlot.MapPlot(0, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(1, 0, 0, 0, 0), new MapPlot.MapPlot(1, 1, 0, 0, 0), new MapPlot.MapPlot(1, 2, 0, 0, 0), new MapPlot.MapPlot(1, 3, 0, 0, 0), new MapPlot.MapPlot(1, 4, 0, 0, 0), new MapPlot.MapPlot(1, 5, 0, 0, 0), new MapPlot.MapPlot(1, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(2, 0, 0, 0, 0), new MapPlot.MapPlot(2, 1, 0, 0, 0), new MapPlot.MapPlot(2, 2, 0, 0, 0), new MapPlot.MapPlot(2, 3, 0, 0, 0), new MapPlot.MapPlot(2, 4, 0, 0, 0), new MapPlot.MapPlot(2, 5, 0, 0, 0), new MapPlot.MapPlot(2, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(3, 0, 0, 0, 0), new MapPlot.MapPlot(3, 1, 0, 0, 0), new MapPlot.MapPlot(3, 2, 0, 0, 0), new MapPlot.MapPlot(3, 3, 0, 0, 0), new MapPlot.MapPlot(3, 4, 0, 0, 0), new MapPlot.MapPlot(3, 5, 0, 0, 0), new MapPlot.MapPlot(3, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(4, 0, 0, 0, 0), new MapPlot.MapPlot(4, 1, 0, 0, 0), new MapPlot.MapPlot(4, 2, 0, 0, 0), new MapPlot.MapPlot(4, 3, 0, 0, 0), new MapPlot.MapPlot(4, 4, 0, 0, 0), new MapPlot.MapPlot(4, 5, 0, 0, 0), new MapPlot.MapPlot(4, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(5, 0, 0, 0, 0), new MapPlot.MapPlot(5, 1, 0, 0, 0), new MapPlot.MapPlot(5, 2, 0, 0, 0), new MapPlot.MapPlot(5, 3, 0, 0, 0), new MapPlot.MapPlot(5, 4, 0, 0, 0), new MapPlot.MapPlot(5, 5, 0, 0, 0), new MapPlot.MapPlot(5, 6, 0, 0, 0)],
//     [new MapPlot.MapPlot(6, 0, 0, 0, 0), new MapPlot.MapPlot(6, 1, 0, 0, 0), new MapPlot.MapPlot(6, 2, 0, 0, 0), new MapPlot.MapPlot(6, 3, 0, 0, 0), new MapPlot.MapPlot(6, 4, 0, 0, 0), new MapPlot.MapPlot(6, 5, 0, 0, 0), new MapPlot.MapPlot(6, 6, 0, 0, 0)]
// ])

const mapWidth = 6
const mapHeight = 6

let map = new Map()
map.initialiseMap( mapWidth, mapHeight )

async function gameLoop() {
  await userLoop( map )

  displayMap( map )

  if ( !(exitGame) ) {
    setTimeout( gameLoop, 0 );
  }
}


gameLoop()