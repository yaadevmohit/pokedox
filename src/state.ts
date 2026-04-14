import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./command.js";

// Export a new State type from this file, 
// it should contain the readline interface and the 
// commands registry. 
// Export a new function called initState. 
// Move the logic that creates the readline interface and the
// commands registry into this function. It should return an 
// initialized State object.



export type CLICommand = {
  name: string;
  description: string;
  callback: (rl: Interface, commands: Record<string, CLICommand>) => void;
};

export interface State  {
    rl: Interface,
    commands: Record<string, CLICommand>
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    return {rl, commands}
}