const prompt = require('prompt')
const { House } = require('../structures/House')
const { Office } = require('../structures/Office')
const { Factory } = require('../structures/Factory')
const { coordinateCheck } = require('../map/mapchecks')
const { WaterStation, PowerStation } = require('../government/resourceBuildings')
const { WaterPipe } = require('../substructures/WaterPipe')
const { ElectricWire } = require('../substructures/ElectricWire')

async function userLoop( map ) {
  const taskbar = await prompt.get({
    properties: {
      taskbar: {
        description: "What do you want to do? (build, destory, exit) ",
        type: "string",
        required: true
      }
    }
  })
  switch ( taskbar.taskbar ) {
      case "exit":
        console.log("\nExiting Game...\n")
        process.exit()
      case "build":
        console.log()
        await buildingSelector( map )
        break
      case "destroy":
        console.log()
        await destructionSelector( map )
        break
  }
}

// selects what building type to build
async function destructionSelector( map ) {
  const response = await prompt.get({
    properties: {
      type: {
        description: "What do you want to destory? (building, pipe, wire) ",
        type: "string",
        required: true
      }
    }
  })
  await destroy( map, response )
}

// destroys a structure/substructure at specified location
async function destroy( map, response ) {
  console.log("\nGive coordinates of where to destroy:\n")
  const {x, y} = await organiseCoordinates( map )
  if (x["condition"] && y["condition"]) {
    map.destroyIndex( y["value"], x["value"], response["type"] )
  }
}

// selects what building type to build
async function buildingSelector( map ) {
  const response = await prompt.get({
    properties: {
      building: {
        description: "What do you want to build? (house, office, factory, waterstation, powerstation, pipe, wire) ",
        type: "string",
        required: true
      }
    }
  })
  await build( map, response )
}

// builds a structure/substructure at specified location
async function build( map, response ) {
  console.log("\nGive coordinates of where to build:\n")
  const {x, y} = await organiseCoordinates( map )
  if (x["condition"] && y["condition"]) {
    structureSelector( map, response, y["value"], x["value"])
  }
}

// returns the coordinates in a clean manner
async function organiseCoordinates( map ) {
  const rawCoordinates = await getRawCoordinates()
  let {x, y} = convertRawCoordinates( rawCoordinates )

  x = coordinateCheck( map, x, "x" )
  y = coordinateCheck( map, y, "y" )
  return {"x": x, "y": y}
}

// converts raw coordinates to comply with 0 indexing arrays
function convertRawCoordinates( rawCoordinates ) {
  const x = rawCoordinates["x"] - 1
  const y = rawCoordinates["y"] - 1
  return {"x": x, "y": y}
}

// gets the coordinates from the user
async function getRawCoordinates() {
  return await prompt.get({
    properties: {
      x: {
        description: "X",
        type: "number",
        required: true
      },
      y: {
        description: "Y",
        type: "number",
        required: true
      }
    }
  })
}

// selects what kind of structure to build at a given location
function structureSelector( map, response, y, x ) {
  switch ( response["building"] ) {
    case "house":
      map.addIndex(new House( y, x, false, 1, false, false))
      break
    case "office":
      map.addIndex(new Office( y, x, false, 1, false, false))
      break
    case "factory":
      map.addIndex(new Factory( y, x, false, 1, false, false))
      break
    case "waterstation":
      map.addIndex(new WaterStation( y, x))
      break
    case "powerstation":
      map.addIndex(new PowerStation( y, x))
      break
    case "pipe":
      map.addIndex(new WaterPipe( y, x ))
      break
    case "wire":
      map.addIndex(new ElectricWire( y, x ))
      break
  }
}

module.exports = {
  userLoop,
  build: buildingSelector
}
