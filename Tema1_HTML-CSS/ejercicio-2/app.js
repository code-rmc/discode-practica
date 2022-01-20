
const carrusel = document.querySelector(".labels-tag");

const flechaIzquierda = document.getElementById("button-left");
const flechaDerecha = document.getElementById("button-right");

const labelsTag = document.querySelectorAll(".labels-tag-button");

labelsTag.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("active");
    });
});

carrusel.scrollLeft > 0 ? flechaIzquierda.style.visibility = "visible" : flechaIzquierda.style.visibility = "hidden";

flechaDerecha.addEventListener("click", () => {
    carrusel.scrollLeft += carrusel.offsetWidth;

    (carrusel.scrollLeft + carrusel.offsetWidth) >= carrusel.scrollLeftMax ? flechaDerecha.style.visibility = "hidden" : flechaIzquierda.style.visibility = "visible";
});

flechaIzquierda.addEventListener("click", () => {
    carrusel.scrollLeft -= carrusel.offsetWidth;

    (carrusel.scrollLeft - carrusel.offsetWidth) <= 0 ? flechaIzquierda.style.visibility = "hidden" : flechaDerecha.style.visibility = "visible";
});