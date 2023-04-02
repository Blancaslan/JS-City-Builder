var Plot = require( './plot' )
class Building extends Plot.Plot{
    // parent class for all buildings in game
    constructor( positionY, positionX, isRoadAccessable, buildingTier ) {
        super( positionY, positionX, isRoadAccessable )

        this.buildingTier = buildingTier
    }

    showData() {
        return [this.positionY, this.positionX, this.isRoadAccessable]
    }
}

// Residence class for residencial buildings that inherits Building
class Residence extends Building {

    constructor( positionY, positionX, isRoadAccessable, buildingTier ) {
        super( positionY, positionX, isRoadAccessable, buildingTier )
    }
}

// Comerical class for commercial buildings that inherits Building
class Commercial extends Building {

    constructor( positionY, positionX, isRoadAccessable, buildingTier ) {
        super( positionY, positionX, isRoadAccessable, buildingTier )
    }
}

// Industrial class for Industrial buildings that inherits Building
class Industrial extends Building {

    constructor( positionY, positionX, isRoadAccessable, buildingTier ) {
        super( positionY, positionX, isRoadAccessable, buildingTier )
    }
}

module.exports = {
    Residence,
    Commercial,
    Industrial
}