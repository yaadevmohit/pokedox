import { PokeAPI } from "../pokeapi.js";
import { State } from "../state.js";

export async function commandMapForward(state: State) {
    const locations = await (state.nextLocationsURL ? state.pokeApi.fetchLocations(state.nextLocationsURL) : state.pokeApi.fetchLocations())
    
    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

    locations.results.forEach(result => {
        console.log(result.name)
    })
}