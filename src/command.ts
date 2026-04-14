import { CLICommand } from "./state.js"
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";


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