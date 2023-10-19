export function handleCommand(command, output, blackout) {
    let response = '';
    switch (command) {
        case 'DIR':
            // ... (other cases)
            break;
        case 'HELP':
            // ... (other cases)
            break;
        // ... (other cases)
        default:
            response = 'Unknown command. Type HELP for a list of available commands.';
    }
    output.innerHTML += `\nC:\>${command}\n${response}\n`;
}

