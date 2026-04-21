import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./types/pokemon.js";



export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type Pokedex = {
    [key: string]: Pokemon
}

export interface State  {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeApi: PokeAPI;
    pokedex: Record<string, Pokemon>;
    nextLocationsURL?: string | null;
    prevLocationsURL?: string | null;
}



export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(),
        pokedex: {},
        nextLocationsURL: null,
        prevLocationsURL: null
    }
}