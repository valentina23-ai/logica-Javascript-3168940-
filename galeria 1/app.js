const contenedor = document.getElementById("contenedor");
const titulo = document.getElementById("titulo");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const imagenes = contenedor.getElementsByTagName("img");

let indice = 0;

const titulos = [
  "Primera Imagen",
  "Segunda Imagen",
  "Tercera Imagen",
  "Cuarta Imagen",
  "Quinta Imagen"
];

function actualizarGaleria() {
  contenedor.style.marginLeft = (-400 * indice) + "px";
  titulo.textContent = titulos[indice];
}

btnNext.addEventListener("click", () => {
  if (indice < imagenes.length - 1) {
    indice++;
    actualizarGaleria();
  }
});

btnPrev.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    actualizarGaleria();
  }
});

actualizarGaleria();

