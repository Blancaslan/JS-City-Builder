const prompt = require('prompt')
const building = require('../building/Building')
const { House } = require('../structures/House')
const { Office } = require('../structures/Office')
const { Factory } = require('../structures/Factory')
const { coordinateCheck } = require('../map/mapchecks')
const { getAllTaxes } = require('../building/buildinglib')

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
        console.log("Exiting Game...")
        process.exit()
      case "build":
        console.log("Entered Build Mode.")
        await build( map )
        break
      case "destroy":
        console.log("Entered Destroy Mode.")
        break
  }
}

async function build( map ) {
  const response = await prompt.get({
    properties: {
      building: {
        description: "What do you want to build? (house, office, factory, waterstation, powerstation, pipe, wire) ",
        type: "string",
        required: true
      }
    }
  })
  return await organs( map, response )
}

async function organs( map, response ) {
  const {x, y} = await organiseCoordinates( map )
  if (x["condition"] && y["condition"]) {
    structureSelector( map, response, y["value"], x["value"])
  }
}

async function organiseCoordinates( map ) {
  console.log("Could you give the coordinates of where you want to build? ")

  const rawCoordinates = await getRawCoordinates()
  let {x, y} = convertRawCoordinates( rawCoordinates )

  x = coordinateCheck( map, x, "x" )
  y = coordinateCheck( map, y, "y" )
  return {"x": x, "y": y}
}

function convertRawCoordinates( rawCoordinates ) {
  const x = rawCoordinates["x"] - 1
  const y = rawCoordinates["y"] - 1
  return {"x": x, "y": y}
}

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
      break
    case "powerstation":
      break
    case "pipe":
      break
    case "wire":
      break
    default:
      console.log("That building doesn't exist.")
  }
}

function outputCurrency( currency ) {
  console.log("Money: " + currency + "\n")
}

function outputStructure( map, heightIndex, widthIndex ) {
  let currentLocation = map.getLocation( heightIndex, widthIndex )

  if (!(currentLocation["structure"] === undefined))
    process.stdout.write(currentLocation["structure"].constructor.name[0] + ' ')
  else 
    process.stdout.write(0 + ' ')
}

function displayUI( map, currency ) {
  console.clear()
  outputCurrency( currency )
  let mapHeight = map.getHeight()
  let mapWidth = map.getWidth()
  for (let heightIndex = 0; heightIndex < mapHeight; heightIndex++) {
    for (let widthIndex = 0; widthIndex < mapWidth; widthIndex++) {
      outputStructure( map, heightIndex, widthIndex )
    }
    console.log()
  }
  console.log("\n-----------\n")
  return
}

module.exports = {
  userLoop,
  build,
  displayUI
}
