import { CLICommand } from "src/state.js";
import { Interface } from "readline";


export function commandHelp(rl: Interface, commands: Record<string, CLICommand>){
    console.log(`Welcome to the Pokedex! \nUsage: \n\nhelp: Displays a help message\nexit: Exit the Pokedex`)
}