import  {createInterface } from 'node:readline';
import { getCommands } from './command.js';

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL(){

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

rl.prompt();  // prints "> " to the terminal

rl.on('line', (userInput) => {
    const words = cleanInput(userInput);
    
    if (words.length > 0) {
        const commandName = words[0];
        const commands = getCommands();
        
        if (commandName in commands) {
            commands[commandName].callback(commands);
        } else {
            console.log("Unknown command");
        }
    }
    rl.prompt();
});

}