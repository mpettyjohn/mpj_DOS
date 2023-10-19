import { typeOutText } from './typeOutText.js';

export function handleSpecialCommand(command, blackout) {
    switch (command) {
        case 'LOGOFF':
            blackout.style.display = 'flex';
            typeOutText(blackout, 'You are now leaving Mark\'s website...', 50, () => {
                setTimeout(() => {
                    window.location.href = 'https://www.spacejam.com/1996/';
                }, 2000);
            });
            break;
        case 'FUN':
            blackout.style.display = 'flex';
            typeOutText(blackout, 'Time warping back to the C&C Era...Welcome Back Commander', 50, () => {
                setTimeout(() => {
                    window.location.href = 'https://cncnet.org/';
                }, 2000);
            });
            break;
        // ... (other cases)
    }
}
