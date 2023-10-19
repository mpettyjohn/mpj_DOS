import { handleCommand } from './commandHandler.js';
import { handleNavigationCommand } from './navigationCommands.js';
import { handleSpecialCommand } from './specialCommands.js';

const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const blackout = document.getElementById('blackout');

commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const command = commandInput.value.trim().toUpperCase();
        commandInput.value = '';

        handleCommand(command, output, blackout);
        handleNavigationCommand(command);
        handleSpecialCommand(command, blackout);

        output.scrollTop = output.scrollHeight;
    }
});
