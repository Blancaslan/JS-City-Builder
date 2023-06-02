function coordinateSizeCheck( coordinate, axisSize ) {
    if (coordinate <= axisSize - 1 && coordinate > -1)
        return {"condition": true, "value": coordinate}
    else
        return {"condition": false}
}

function axisCheck( map, axis ) {
    if (axis === 'x') {
        return {"axisSize": map.getWidth()}
    }
    else if (axis === 'y') {
        return {"axisSize": map.getHeight()}
    }
    else {
        return {"axisSize": undefined}
    }
}

function coordinateCheck( map, coordinate, axis) {
    const axisSize = axisCheck( map, axis )["axisSize"]
    return coordinateSizeCheck( coordinate, axisSize )
}

module.exports = {
    coordinateCheck
}