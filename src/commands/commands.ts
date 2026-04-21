import type { CLICommand } from "../state.js"
import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMapForward } from "./command_map.js";
import { commandMapBack } from "./command_mapb.js";
import { commandExplore } from "./explore.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "shows helper commands",
        callback: commandHelp
    },
    map: {
      name: "map",
      description: "show next 20 locations",
      callback: commandMapForward
    },
    mapb: {
      name: "mapb",
      description: "show previous 20 locations",
      callback: commandMapBack
    },
    explore: {
      name: "explore",
      description: "explore pokemon encounters",
      callback: commandExplore
    },
    catch: {
      name: "catch",
      description: "attempt to catch a pokemon",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "inspected a pokemon in pokedex",
      callback: commandInspect
    }
  };
}