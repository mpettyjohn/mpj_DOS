export function typeOutText(element, text, delay, callback) {
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }
    }, delay);
}
