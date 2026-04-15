export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fetchUrl = pageURL || `${PokeAPI.baseURL}/location-area`;
    try {
      const res = await fetch(fetchUrl);
      if (!res.ok) {
        throw new Error(`Failed to fetch locations: ${res.status} ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const res = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch location data: ${res.status} ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Error fetching location '${locationName}': ${(error as Error).message}`);
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
  id: number;
  name: string;
  region: { name: string; url: string } | null;
  names: {
    name: string;
    language: { name: string; url: string };
  }[];
  game_indices: {
    game_index: number;
    generation: { name: string; url: string };
  }[];
  areas: { name: string; url: string }[];
};