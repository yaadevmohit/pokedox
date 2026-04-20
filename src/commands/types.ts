export interface NamedResource {
  name: string;
  url: string;
}

export interface NameLocalization {
  name: string;
  language: NamedResource;
}

export interface VersionDetails {
  rate: number;
  version: NamedResource
}

export interface PokemonEncounter {
  pokemon: NamedResource;
  version_details: VersionDetails[];
}

export interface EncounterMethodRate {
  encounter_method: NamedResource;
  version_details: any[];
}

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  location: NamedResource;
  names: NameLocalization[];
  encounter_method_rates: EncounterMethodRate[];
  pokemon_encounters: PokemonEncounter[];
}
