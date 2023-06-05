const { SubStructure } = require('./SubStructure')

class WaterPipe extends SubStructure {
    constructor( positionY, positionX, hasResource ) {
        super( positionY, positionX, hasResource )
    }
}

module.exports = {
    WaterPipe
}