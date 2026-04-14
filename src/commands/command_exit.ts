import process from "node:process"
import { Interface } from "node:readline"

export function commandExit(rl: Interface){
    console.log("Closing the Pokedex... Goodbye!")
    rl.close()
    process.exit(0)
}