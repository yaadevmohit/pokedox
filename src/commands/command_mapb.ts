import { PokeAPI } from "../pokeapi.js";
import { State } from "../state.js";
// const pokeApi = new PokeAPI()
export async function commandMapBack(state: State) {
    if(!state.prevLocationsURL) {
        console.log("nowhere to map back to")
        return
    }
    const locations = await state.pokeApi.fetchLocations(state.prevLocationsURL)
    locations.results.forEach(result => {
        console.log(result.name)
    })

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

}