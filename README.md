# Pokedex
A command-line REPL built using PokéAPI. You can map forward and backward in the terminal to different location-area list.

## How to get started
1. clone the repo
2. install dependencies: `npm install`
3. run in dev mode `npm run dev`

## available commands
1. help: to see list of available commands and their usage
2. map: to see next 20 locations
3. mapb: same as map but backwards
4. explore: explore more details about a certain locations


## Understanding of how this project was built
1. use repl loop which imported state type from state object.
2. state is passed in the repl loop with createInterface (from node:readline) ??
3. state returns readline to provide with input, output and prompt methods (located in commmands folder.)
4. state also provide the pokeapi with the fetching methods.
    * uses fetchlocations to fetch all location areas and uses caching
    * uses fetchlocation to fetch a certain location details and uses caching
    * caching implemented from imported from cache files

