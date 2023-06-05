const { MapPlot } = require('./MapPlot')

function initialisePlot( map, indexHeight, indexWidth ) {
    let newPlot = new MapPlot( indexHeight, indexWidth, undefined, undefined, undefined )
    map[map.length - 1].push( newPlot )
}

function structureMap( map, width, height ) {
    for (let indexHeight = 0; indexHeight < height; indexHeight++) {
        map.push([])
        for (let indexWidth = 0; indexWidth < width; indexWidth++) {
            initialisePlot( map, indexHeight, indexWidth )
        }
    }
}

// gives an object a resource
function transmitResource( structure, getFunction, setFunction ) {
    if ( !( structure === false ) && !(getFunction( structure ) === 0 ) ) {
        setFunction( structure )
    }
}

// spreads resources from object to nearby objects
function transmitResources( map, structure, getFunction, setFunction ) {
    let locations = [
        map.getLocation(structure.positionY, structure.positionX),
        map.getLocation(structure.positionY, structure.positionX - 1), 
        map.getLocation(structure.positionY, structure.positionX + 1), 
        map.getLocation(structure.positionY - 1, structure.positionX), 
        map.getLocation(structure.positionY + 1, structure.positionX)
    ]

    for (let index = 0; index < locations.length; index++)
        transmitResource( locations[index], getFunction, setFunction )
}

module.exports = {
    structureMap,
    transmitResources
}