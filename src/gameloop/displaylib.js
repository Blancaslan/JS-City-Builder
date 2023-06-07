function outputCurrency( currency ) {
    console.log("Money: " + currency + "\n")
}

function outputStructure( map, heightIndex, widthIndex ) {
    let currentLocation = map.getLocation( heightIndex, widthIndex )

    if (!(currentLocation["structure"] === undefined)) {
        process.stdout.write(currentLocation["structure"].constructor.name[0] + ' ')
    }
    else {
        process.stdout.write('0 ')
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

module.exports = {
    displayUI
}

