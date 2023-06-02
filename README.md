INTRODUCTION:

This is a city builder game and my first personal project, It is written in javascript and resembles the hit game City Skylines.

The entire GUI will be in terminal. I plan on giving it a proper GUI through either a web or desktop app but that is set aside for after these foundations have been set.

HOW TO RUN.
To run the app you have to:
Download the code,
open it up in an IDE install all dependencies,
then run the main.js file in "/src/gameloop" using "node main.js" in a terminal.

DEPENDENCIES: 
  Node.js^19.2.0+,
  prompt

I try my best to keep the code as modular and reusable as possible to save development time and performance.

FYI: It's still very work in progress so some commits being pushed might have weird code that isnt used anymore/half finished code.

'/building' stores all classes, methods and functions to do with Building.

'/gameloop' stores all code that is identified as necessary to running the game.

'/government' stores all classes, methods and functions to do with goverment buildings

'/map' stores all the code that alters the map and all the data inside it.

'/substructures' stores all classes, methods and function to do with sub-structures.

WHAT IS THE DIFFERENCE BETWEEN STRUCTURES AND SUB-STRUCTURES?

Structures are the main class that is on the plot.  e.g: Residence or WaterStation.
Sub-structures can also and are also on the same plot as structures but are not shown on the main map. e.g: Pipe or Wire.

