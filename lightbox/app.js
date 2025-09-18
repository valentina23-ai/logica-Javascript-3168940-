const flotante = document.getElementById("flotante");
const imgPrincipal = document.getElementById("imgprincipal");
const miniaturas = document.querySelectorAll(".min");
const btnCerrar = document.getElementById("equis");
const btnSiguiente = document.getElementById("sig");
const btnAnterior = document.getElementById("ant");

let imagenes = [];
let indiceActual = 0;

miniaturas.forEach((img, i) => {
    imagenes.push(img.src);
    img.addEventListener("click", () => {
        indiceActual = i;
        mostrarImagen();
        mostrarLightbox();
    });
});

function mostrarLightbox() {
    flotante.style.top = "0";
}

function ocultarLightbox() {
    flotante.style.top = "-100vh";
}

function mostrarImagen() {
    imgPrincipal.src = imagenes[indiceActual];
}

btnCerrar.addEventListener("click", ocultarLightbox);

btnSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
});

btnAnterior.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
});

flotante.addEventListener("click", (e) => {
    if (e.target === flotante || e.target.id === "cuadro") {
        ocultarLightbox();
    }
});
