const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const blackout = document.getElementById('blackout');

function typeOutText(text, callback) {
    blackout.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        blackout.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            if (callback) {
                setTimeout(callback, 2000);
            }
        }
    }, 100);
}

commandInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const command = commandInput.value.trim().toUpperCase();
        let response = '';

        switch (command) {
            case 'DIR':
                response = '1. Managing by Metrics\n2. Strategy\n3. Coffee Conversations\n4. Read With Me\n5. Nurture Your Nostalgia - Travel The Oregon Trail';
                break;
            case 'HELP':
                response = 'Available commands: DIR, HELP, OPEN <number>, DATE, LOGOFF, FUN';
                break;
            case 'OPEN 1':
                window.location.href = 'metrics.html';
                return;
            case 'OPEN 2':
                window.location.href = 'strategy.html';
                return;
            case 'OPEN 3':
                window.location.href = 'coffee.html';
                return;
            case 'OPEN 4':
                window.location.href = 'bookclub.html';
                return;
            case 'OPEN 5':
                window.location.href = 'trail.html';
                return;
            case 'DATE':
                response = new Date().toLocaleString();
                break;
            case 'LOGOFF':
                blackout.style.display = 'flex';
                typeOutText('You are now leaving Mark\'s website...', () => {
                    window.location.href = 'https://www.spacejam.com/1996/';
                });
                return;
            case 'FUN':
                blackout.style.display = 'flex';
                typeOutText('Time warping back to the C&C Era...Welcome Back Commander', () => {
                    window.location.href = 'https://cncnet.org/';
                });
                return;
            default:
                response = 'Unknown command. Type HELP for a list of available commands.';
        }

        output.innerHTML += `\nC:\> ${command}\n${response}\n`;
        commandInput.value = '';

        // Scroll to the bottom of the content
        output.scrollTop = output.scrollHeight;
    }
});
