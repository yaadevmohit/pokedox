import { type State } from './state.js';

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL(state: State) {

    const {rl, commands} = state

    rl.prompt();  // prints "> " to the terminal

    rl.on('line', (userInput) => {
        const words = cleanInput(userInput);
        
        if (words.length > 0) {
            const commandName = words[0];
            if (commandName in commands) {
                commands[commandName].callback(rl, commands);
            } else {
                console.log("Unknown command");
            }
        }
        rl.prompt();
    });

}