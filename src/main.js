const prompt = require( 'prompt-sync' )();
var Map = require( './map' )
var NonBuildingEntities = require( './nonBuildingEntities' )
var MapPlot = require( './MapPlot' )
var Building = require( './building' )

let aboveMap = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])

let underMap = new Map.Map([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])
    
let house1 = new Building.Residence(  0, 4, false, 3, false, false  )
let office1 = new Building.Commercial(  0, 3, false, 1, false, false )

let highway = new MapPlot.MapPlot(  0, 1, true  )
let road1 = new NonBuildingEntities.Road(  0, 2, false  )
let road2 = new NonBuildingEntities.Road(  0, 0, false  )
let road3 = new NonBuildingEntities.Road(  1, 1, false  )
let road4 = new NonBuildingEntities.Road(  2, 1, false  )
let road5 = new NonBuildingEntities.Road(  2, 2, false  )
let road6 = new NonBuildingEntities.Road(  2, 4, false  )

let pipe1 = new NonBuildingEntities.WaterPipe( 0, 4 )
let wire1 = new NonBuildingEntities.ElectricityWire( 0, 3 )

underMap.addindex( pipe1 )
underMap.addindex( wire1 )
aboveMap.addindex(  highway  )
aboveMap.addindex(  road1  )
aboveMap.addindex(  road2  )
aboveMap.addindex(  road3  )
aboveMap.addindex(  road4  )
aboveMap.addindex(  road5  )
aboveMap.addindex(  road6  )
aboveMap.addindex(  office1  )
aboveMap.addindex(  house1  )
aboveMap.highwayCheck(  highway.getPositionY(), highway.getPositionX()  )
underMap.setBuildingWaterAndElectricity( aboveMap, 0, 3 )
underMap.setBuildingWaterAndElectricity( aboveMap, 0, 4 )
console.log( aboveMap.showMap() )
console.log( Building.getAllTaxes( aboveMap ) )