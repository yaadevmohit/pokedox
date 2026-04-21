import { State } from "src/state.js";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}


export async function commandCatch(state: State, name: string) {
    const pokemonData = await state.pokeApi.fetchPokemon(name)
    const pokemonName = pokemonData.name
    const baseExp = Math.round(pokemonData.base_experience / 100) + 1
    if (pokemonName in state.pokedex) {
        console.log(`${pokemonName} already caught and in your pokedex`)
    }
    else {
        console.log(`Throwing a Pokeball at ${pokemonData.name}...`)
        const caught = getRandomInt(baseExp) === 0 ? true : false
        if (caught) {
            state.pokedex[pokemonName] = pokemonData
            console.log(`${pokemonName} was caught!`)
            console.log(`you may now inspect it with the inspect command.`)
        }
        else {
             console.log(`couldn't catch ${pokemonName}...\n try again`)
        }
    }
    
}