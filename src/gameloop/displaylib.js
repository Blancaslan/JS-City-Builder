function outputCurrency( currency ) {
    console.log("Money: " + currency + "\n")
}

function getColorData( map, height, width ) {
    let location = map.getLocation( height, width )
    const background = colorSelector( location )

    return [location, background]
}

function outputStructure( map, height, width ) {
    const [location, background] = getColorData( map, height, width )

    if (!(location["structure"] === undefined)) {
        const textDisplay = background + location["structure"].constructor.name[0]
        process.stdout.write( textDisplay + '\x1b[0m ')
    }
    else {
        process.stdout.write(background + '0\x1b[0m ')
    }
}

function displayUI( map, currency ) {
    console.clear()

    outputCurrency( currency )

    const mapSize = map.getMapWidthAndHeight()

    for (let heightIndex = 0; heightIndex < mapSize["mapHeight"]; heightIndex++) {
        for (let widthIndex = 0; widthIndex < mapSize["mapWidth"]; widthIndex++) {
            outputStructure( map, heightIndex, widthIndex )
        }
        console.log()
    }
    console.log("\n-----------\n")
}

function colorSelector( currentPlot ) {
    const [pipe, wire] = currentPlot.getSubStructures()

    if (!(pipe === undefined) && !(wire === undefined)) {
        return '\x1b[42m'
    }
    else if (!(wire === undefined)) {
        return '\x1b[43m'
    }
    else if (!(pipe === undefined)) {
        return '\x1b[44m'
    }
    else {
        return '\x1b[40m'
    }
}

module.exports = {
    displayUI
}

