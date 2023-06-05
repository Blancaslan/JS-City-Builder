const { SubStructure } = require('./SubStructure')

class ElectricWire extends SubStructure {
    constructor( positionY, positionX, hasResource ) {
        super( positionY, positionX, hasResource )
    }
}

module.exports = {
    ElectricWire
}
