const Map = require( './map/map' )
const NonBuildingEntities = require( './subStructures/subStructures' )
const Building = require( './building/Building' )
const BuildingLib = require('./building/buildingLib')
const MapPlot = require('./map/mapPlot')
const resourceBuildings = require('./government/resourceBuildings')

let map = new Map.Map([
    [new MapPlot.MapPlot(0, 0, 0, 0, 0), new MapPlot.MapPlot(0, 1, 0, 0, 0), new MapPlot.MapPlot(0, 2, 0, 0, 0), new MapPlot.MapPlot(0, 3, 0, 0, 0), new MapPlot.MapPlot(0, 4, 0, 0, 0), new MapPlot.MapPlot(0, 5, 0, 0, 0), new MapPlot.MapPlot(0, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(1, 0, 0, 0, 0), new MapPlot.MapPlot(1, 1, 0, 0, 0), new MapPlot.MapPlot(1, 2, 0, 0, 0), new MapPlot.MapPlot(1, 3, 0, 0, 0), new MapPlot.MapPlot(1, 4, 0, 0, 0), new MapPlot.MapPlot(1, 5, 0, 0, 0), new MapPlot.MapPlot(1, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(2, 0, 0, 0, 0), new MapPlot.MapPlot(2, 1, 0, 0, 0), new MapPlot.MapPlot(2, 2, 0, 0, 0), new MapPlot.MapPlot(2, 3, 0, 0, 0), new MapPlot.MapPlot(2, 4, 0, 0, 0), new MapPlot.MapPlot(2, 5, 0, 0, 0), new MapPlot.MapPlot(2, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(3, 0, 0, 0, 0), new MapPlot.MapPlot(3, 1, 0, 0, 0), new MapPlot.MapPlot(3, 2, 0, 0, 0), new MapPlot.MapPlot(3, 3, 0, 0, 0), new MapPlot.MapPlot(3, 4, 0, 0, 0), new MapPlot.MapPlot(3, 5, 0, 0, 0), new MapPlot.MapPlot(3, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(4, 0, 0, 0, 0), new MapPlot.MapPlot(4, 1, 0, 0, 0), new MapPlot.MapPlot(4, 2, 0, 0, 0), new MapPlot.MapPlot(4, 3, 0, 0, 0), new MapPlot.MapPlot(4, 4, 0, 0, 0), new MapPlot.MapPlot(4, 5, 0, 0, 0), new MapPlot.MapPlot(4, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(5, 0, 0, 0, 0), new MapPlot.MapPlot(5, 1, 0, 0, 0), new MapPlot.MapPlot(5, 2, 0, 0, 0), new MapPlot.MapPlot(5, 3, 0, 0, 0), new MapPlot.MapPlot(5, 4, 0, 0, 0), new MapPlot.MapPlot(5, 5, 0, 0, 0), new MapPlot.MapPlot(5, 6, 0, 0, 0)],
    [new MapPlot.MapPlot(6, 0, 0, 0, 0), new MapPlot.MapPlot(6, 1, 0, 0, 0), new MapPlot.MapPlot(6, 2, 0, 0, 0), new MapPlot.MapPlot(6, 3, 0, 0, 0), new MapPlot.MapPlot(6, 4, 0, 0, 0), new MapPlot.MapPlot(6, 5, 0, 0, 0), new MapPlot.MapPlot(6, 6, 0, 0, 0)]
])

let house1 = new Building.Residence( 1, 0, false, 3, false, false )
let waterStation = new resourceBuildings.WaterStation( 0, 0, 0, 0 )
let powerStation = new resourceBuildings.PowerStation( 0, 1, 0, 0 )

let pipe1 = new NonBuildingEntities.WaterPipe( 0, 0, false)
let wire1 = new NonBuildingEntities.ElectricityWire( 0, 0, false)

map.addIndex( house1 )
map.addIndex( waterStation )
map.addIndex( powerStation )
map.addIndex( pipe1 )
map.addIndex( wire1 )

console.log( map.getLocation( 0, 0 ))
console.log( map.getLocation( 1, 0 ))

BuildingLib.transmitProperties( map, waterStation, BuildingLib.getPipe, BuildingLib.setWater )
BuildingLib.transmitProperties( map, powerStation, BuildingLib.getWire, BuildingLib.setElectricity )

map.setAllBuildingNecessities()

console.log( map.getLocation( 0, 0 ))
console.log( map.getLocation( 1, 0 ))

console.log( BuildingLib.getAllTaxes( map ) )