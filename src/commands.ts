import type { CLICommand } from "./state.js"
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { commandMapForward } from "./commands/command_map.js";
import { commandMapBack } from "./commands/command_mapb.js";

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
    }
  };
}