// 1. Cambiar color del header al hacer scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 2. Mostrar nombre desde input
const nombreInput = document.getElementById("nombreInput");
const mostrarNombre = document.getElementById("mostrarNombre");
const salidaNombre = document.getElementById("salidaNombre");

mostrarNombre.addEventListener("click", () => {
  salidaNombre.textContent = `¡Hola, ${nombreInput.value} gracias por visitar nuestro proyecto!`;
});

// 3. Cambiar imagen de la galería
const imagenGaleria = document.getElementById("imagenGaleria");
const cambiarImagen = document.getElementById("cambiarImagen");

cambiarImagen.addEventListener("click", () => {
  if (imagenGaleria.src.includes("shaki.jpg")) {
    imagenGaleria.src = "shaki2.jpg";
  } else {
    imagenGaleria.src = "shaki.jpg";
  }
});

// 4. Alternar modo oscuro / claro
const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modoBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 5. Scroll suave al navegar
document.querySelectorAll("nav a").forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(enlace.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

