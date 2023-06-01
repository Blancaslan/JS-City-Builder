const prompt = require('prompt')
const building = require('../building/Building')

async function userLoop( map ) {
  const taskbar = await prompt.get({
    properties: {
      taskbar: {
        description: "What do you want to do? (build, destory, exit): ",
        type: "string",
        required: true
      }
    }
  })
  switch ( taskbar.taskbar ) {
      case "exit":
        console.log("Exiting Game.")
        process.exit()
      case "build":
        console.log("Entered Build Mode.")
        await build( map )
        break
      case "destroy":
        console.log("Where do you want to destoy?")
        break
  }
}

async function build( map ) {
  const response = await prompt.get({
    properties: {
      building: {
        description: "What do you want to build? (house, office, factory, waterstation, powerstation, pipe, wire): ",
        type: "string",
        required: true
      }
    }
  })
  return await structureSelector( map, response )
}

async function structureSelector( map, response ) {
  const {x, y} = await location()
  switch ( response["building"] ) {
    case "house":
      map.addIndex(new building.Residence( y - 1, x - 1, false, 1, false, false))
      break
    case "office":
      break
    case "factory":
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
      return
  }
}

async function location() {
  console.log("Could you give the coordinates of where you want to build?")
  return await getCoordinates()
}

async function getCoordinates( ) {
  return await prompt.get({
    properties: {
      x: {
        description: "X: ",
        type: "number",
        required: true
      },
      y: {
        description: "Y: ",
        type: "number",
        required: true
      }
    }
  })
}

function displayMap( map ) {
  let mapHeight = map.getHeight()
  let mapWidth = map.getWidth()
  for (let heightIndex = 0; heightIndex < mapHeight; heightIndex++) {
    console.log()
    for (let widthIndex = 0; widthIndex < mapWidth; widthIndex++) {
      let currentLocation = map.getLocation( heightIndex, widthIndex )
      if (!(currentLocation["structure"] === undefined))
        process.stdout.write("" + currentLocation["structure"].constructor.name[0])
      else 
        process.stdout.write("" + 0)

    }
  }
  return
}

module.exports = {
  userLoop,
  build,
  displayMap
}
