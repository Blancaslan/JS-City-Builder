const prompt = require( 'prompt-sync' )();
const Map = require( './map' )
const NonBuildingEntities = require( './nonBuildingEntities' )
const MapLocation = require( './mapLocation' )
const Building = require( './building/building' )
const BuildingLib = require('./building/buildingLib')
const MapPlot = require('./mapPlot')

let map = new Map.Map([
    [new MapPlot.MapPlot(0, 0, 0, 0, 0), new MapPlot.MapPlot(0, 1, 0, 0, 0), new MapPlot.MapPlot(0, 2, 0, 0, 0), new MapPlot.MapPlot(0, 3, 0, 0, 0), new MapPlot.MapPlot(0, 4, 0, 0, 0), new MapPlot.MapPlot(0, 5, 0, 0, 0), new MapPlot.MapPlot(0, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(1, 0, 0, 0, 0), new MapPlot.MapPlot(1, 1, 0, 0, 0), new MapPlot.MapPlot(1, 2, 0, 0, 0), new MapPlot.MapPlot(1, 3, 0, 0, 0), new MapPlot.MapPlot(1, 4, 0, 0, 0), new MapPlot.MapPlot(1, 5, 0, 0, 0), new MapPlot.MapPlot(1, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(2, 0, 0, 0, 0), new MapPlot.MapPlot(2, 1, 0, 0, 0), new MapPlot.MapPlot(2, 2, 0, 0, 0), new MapPlot.MapPlot(2, 3, 0, 0, 0), new MapPlot.MapPlot(2, 4, 0, 0, 0), new MapPlot.MapPlot(2, 5, 0, 0, 0), new MapPlot.MapPlot(2, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(3, 0, 0, 0, 0), new MapPlot.MapPlot(3, 1, 0, 0, 0), new MapPlot.MapPlot(3, 2, 0, 0, 0), new MapPlot.MapPlot(3, 3, 0, 0, 0), new MapPlot.MapPlot(3, 4, 0, 0, 0), new MapPlot.MapPlot(3, 5, 0, 0, 0), new MapPlot.MapPlot(3, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(4, 0, 0, 0, 0), new MapPlot.MapPlot(4, 1, 0, 0, 0), new MapPlot.MapPlot(4, 2, 0, 0, 0), new MapPlot.MapPlot(4, 3, 0, 0, 0), new MapPlot.MapPlot(4, 4, 0, 0, 0), new MapPlot.MapPlot(4, 5, 0, 0, 0), new MapPlot.MapPlot(4, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(5, 0, 0, 0, 0), new MapPlot.MapPlot(5, 1, 0, 0, 0), new MapPlot.MapPlot(5, 2, 0, 0, 0), new MapPlot.MapPlot(5, 3, 0, 0, 0), new MapPlot.MapPlot(5, 4, 0, 0, 0), new MapPlot.MapPlot(5, 5, 0, 0, 0), new MapPlot.MapPlot(5, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(6, 0, 0, 0, 0), new MapPlot.MapPlot(6, 1, 0, 0, 0), new MapPlot.MapPlot(6, 2, 0, 0, 0), new MapPlot.MapPlot(6, 3, 0, 0, 0), new MapPlot.MapPlot(6, 4, 0, 0, 0), new MapPlot.MapPlot(6, 5, 0, 0, 0), new MapPlot.MapPlot(6, 6, 0, 0, 0)]
])
    
let house1 = new Building.Residence(  0, 3, false, 3, false, false  )
let house2 = new Building.Residence(  0, 4, false, 3, false, false  )
let house3 = new Building.Residence(  0, 5, false, 3, false, false  )
let house4 = new Building.Residence(  1, 3, false, 3, false, false  )
let house5 = new Building.Residence(  1, 4, false, 3, false, false  )
let house6 = new Building.Residence(  1, 5, false, 3, false, false  )

let pipe1 = new NonBuildingEntities.WaterPipe( 0, 4 )
let wire1 = new NonBuildingEntities.ElectricityWire( 0, 3 )

map.addindex( pipe1 )
map.addindex( wire1 )
map.addindex(  house1  )
map.addindex(  house2  )
map.addindex(  house3  )
map.addindex(  house4  )
map.addindex(  house5  )
map.addindex(  house6  )

map.setBuildingWaterAndElectricity( 0, 3 )
map.setBuildingWaterAndElectricity( 0, 4 )
//console.log( Building.getAllTaxes( map ) )
//console.log( map.getMap() )
console.log( map.getLocation( 0, 3 ) )
console.log( map.getLocation( 0, 4 ) )
console.log( map.getLocation( 0, 5 ) )
console.log( map.getLocation( 1, 3 ) )
console.log( map.getLocation( 1, 4 ) )
console.log( map.getLocation( 1, 5 ) )