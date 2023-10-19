export function handleNavigationCommand(command) {
    switch (command) {
        case 'OPEN 1':
            window.location.href = 'metrics.html';
            break;
        case 'OPEN 2':
            window.location.href = 'strategy.html';
            break;
        // ... (other cases)
    }
}
