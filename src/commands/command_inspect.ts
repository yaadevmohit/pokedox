import { State } from "src/state.js";

export async function commandInspect(state: State, name: string) {
    if (name in state.pokedex) {
        const pokemon = state.pokedex[name]
        console.log(`Name: ${pokemon.name}`)
        console.log(`Height: ${pokemon.height}`)
        console.log(`Weight: ${pokemon.weight}`)
        console.log("Stats:")
        pokemon.stats.forEach(stat => {
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
        })
        console.log("Types:")
        pokemon.types.forEach(type => {
            console.log(`  - ${type.type.name}`)
        })
        return
    }
    console.log("you have not caught that pokemon")
}