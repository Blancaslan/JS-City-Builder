const { getAllTax } = require('../building/buildinglib')
const { userLoop, displayUI } = require('./gamelooplib')
const { Map } = require( '../map/Map' )

const { WaterStation, PowerStation } = require('../government/resourceBuildings')
const { WaterPipe } = require('../substructures/WaterPipe')
const { ElectricWire } = require('../substructures/ElectricWire')

const mapWidth = 6
const mapHeight = 6

let map = new Map( mapWidth, mapHeight )
map.initialiseMap()

map.addIndex( new WaterStation( 0, 0 ))
map.addIndex( new PowerStation( 0, 1 ))

map.addIndex( new WaterPipe( 0, 0, false ))
map.addIndex( new ElectricWire( 0, 0, false ))
map.addIndex( new ElectricWire( 0, 1, false ))

let currency = 0

setInterval(() => {
  map.setAllBuildingsResources()
  currency += getAllTax( map )
}, 200);


async function gameLoop() {
  displayUI( map, currency )

  await userLoop( map )

  setTimeout( gameLoop, 0 );
}

gameLoop()