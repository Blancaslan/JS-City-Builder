var Plot = require('./plot')

// class for making roads
class Road extends Plot.Plot {
    constructor( positionY, positionX, isRoadAccessable ) {
        super( positionY, positionX, isRoadAccessable )
    }

}

module.exports = {Road}
