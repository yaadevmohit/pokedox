# Pokédex
A command-line REPL built using PokéAPI. You can map forward and backward in the terminal to different location-area lists.

## How to get started
1. Clone the repo.
2. Install dependencies: `npm install`.
3. Run in dev mode: `npm run dev`.

## Available commands
1. help: To see list of available commands and their usage.
2. map: To see next 20 locations.
3. mapb: Same as map but backwards.
4. explore: Explore more details about certain locations.
5. catch: To catch a Pokémon and add it to pokedex object in state. Don't catch if already in pokedex.
6. inspect: Inspect a caught Pokémon in pokedex.
7. pokedex: Print the names of all the Pokémon in pokedex.


## Understanding of how this project was built
1. Use REPL loop which imported state type from state object.
2. State is passed in the REPL loop with createInterface (from node:readline).
3. State returns readline to provide with input, output, and prompt methods (located in commands folder).
4. State also provides the PokéAPI with the fetching methods.
    * Uses fetchlocations to fetch all location areas and uses caching.
    * Uses fetchlocation to fetch certain location details and uses caching.
    * Caching implemented from imported cache files.
