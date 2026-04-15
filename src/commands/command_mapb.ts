import { PokeAPI } from "../pokeapi.js";
import { State } from "../state.js";

export async function commandMapBack(state: State) {
    const pokeApi = new PokeAPI()
    if(!state.prevLocationsURL) {
        console.log("nowhere to map back to")
        return
    }
    const locations = await pokeApi.fetchLocations(state.prevLocationsURL)
    locations.results.forEach(result => {
        console.log(result.name)
    })

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

}