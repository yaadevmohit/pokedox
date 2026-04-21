import { Cache } from "./pokecache.js";
import type { Pokemon } from "./types/pokemon.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache = new Cache(300000)

  constructor() {

  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fetchUrl = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cachedLocations: ShallowLocations | undefined = this.#cache.get(fetchUrl)
    if (cachedLocations) {
      return cachedLocations
    }
    try {
      const res = await fetch(fetchUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch locations: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      this.#cache.add(fetchUrl, data)
      return data
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cachedLocation: Location | undefined = this.#cache.get(url)
    if (cachedLocation) {
        return cachedLocation
    }
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch location data: ${res.status} ${res.statusText}`);
      }
      const location = await res.json();
      this.#cache.add(url, location)
      return location
    } catch (error) {
      throw new Error(`Error fetching location '${locationName}': ${(error as Error).message}`);
    }
  }

  async fetchPokemon(name: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${name}`
    const cachedPokemon: Pokemon | undefined = this.#cache.get(url)
    if (cachedPokemon) {
        return cachedPokemon
    }
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch pokemon data: ${res.status} ${res.statusText}`);
      }
      const pokemon = await res.json();
      this.#cache.add(url, pokemon)
      return pokemon
    } catch (error) {
      throw new Error(`Error fetching pokemon '${name}': ${(error as Error).message}`);
    }
  } 
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};