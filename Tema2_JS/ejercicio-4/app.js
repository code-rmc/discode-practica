
const confetti = new ConfettiGenerator({ target: 'my-canvas' });

const form = document.querySelector("#form");

const elementDay = document.querySelector('#day'),
    elementHs = document.querySelector('#hours'),
    elementMint = document.querySelector('#mint'),
    elementSecond = document.querySelector('#second');

let fechaAnterior = null;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataForm = new FormData(form);

    let dateInput = dataForm.get('dateMonth') + " " + dataForm.get('dateDay') + " " + dataForm.get('dateYear') + " " + dataForm.get('timeHsMint');

    if (fechaAnterior === null) {
        fechaAnterior = dateInput;
    }

    const timer = setInterval(() => {
        const fecha = new Date(dateInput);
        const time = new Date();

        let calcTime = (fecha - time + 1000) / 1000;

        if (Math.floor(calcTime) <= 0) {
            calcTime = 0;
            confetti.render();
            clearInterval(timer);
        }
        if (!(dateInput === fechaAnterior)) {
            console.log(!(dateInput === fechaAnterior));
            console.log("Anterior: " + fechaAnterior);
            console.log("Nuevo: " + dateInput);

            clearInterval(timer);
        }

        const formato = (time) => time < 10 ? `0${time}` : time

        const resDay = Math.floor(calcTime / (3600 * 24));
        const resHs = Math.floor(calcTime / 3600 % 24);
        const resMint = Math.floor(calcTime / 60 % 60);
        const resSeg = Math.floor(calcTime % 60);

        elementDay.textContent = resDay;
        elementHs.textContent = formato(resHs);
        elementMint.textContent = formato(resMint);
        elementSecond.textContent = formato(resSeg);

    }, 1000);


    console.log(timer);

});