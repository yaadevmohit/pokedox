import { PokeAPI } from "../pokeapi.js";
import { State } from "../state.js";

export async function commandMap(state: State) {
    const pokeApi = new PokeAPI()
    const locations = await (state.nextLocationsURL ? pokeApi.fetchLocations(state.nextLocationsURL) : pokeApi.fetchLocations())
    
    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

    locations.results.forEach(result => {
        console.log(result.name)
    })
}