const span = document.getElementById("key");
const keys = ["s", "g", "z", "o", "l", "y", "m", "j", "k", "v"];

document.body.addEventListener("keydown", play);

function play(event) {
    const currentKeyIndex = Math.floor(Math.random() * keys.length);
    const currentKey = keys[currentKeyIndex];

    if (event.key === " ") {
        span.textContent = `Натисніть клавішу ${currentKey}`;
    } else if (keys.includes(event.key)) {
        span.textContent = `Ви натиснули правельну клавішу натисніть пробіл щоб продовжити`;
    }
}
