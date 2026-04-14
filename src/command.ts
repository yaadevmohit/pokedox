import { CLICommand } from "./types.js"
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";


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
    }
  };
}