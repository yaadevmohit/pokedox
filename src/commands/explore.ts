import { State } from "src/state.js";
export async function commandExplore(state: State, name:string) {
    const encountersData = await state.pokeApi.fetchLocation(name)
    encountersData.pokemon_encounters.forEach(pokemon => {
        console.log(pokemon.pokemon.name)
    })
}

