import type { State } from "../state.js";

export async function commandHelp(state: State) {
    console.log("\nWelcome to Pokedex!\nUsage:\n\n");
    for (const cmd of Object.values(state.commands)) {
        console.log(`${cmd.name}: ${cmd.description}`)
    }
}