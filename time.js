let h1 = document.getElementById('countdown');
let button = document.getElementById('startButton');
let start = 10;

button.addEventListener('click', () => {
    const countdownInterval = setInterval(() => {
        if (start >= 0) {
            h1.textContent = start;
            start--;
        } else {
            clearInterval(countdownInterval); // Detenemos el intervalo
            setTimeout(() => {
                h1.textContent = "Time's up!"; // Mostramos el mensaje
            }, 0);
        }
    }, 1000);
});
