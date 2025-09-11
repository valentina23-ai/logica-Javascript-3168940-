const formulario = document.getElementById("customForm");
const resultado = document.getElementById("resultado");
const userPage = document.querySelector(".userPage");
const imgEquipo = document.querySelector(".img-equipo");
const textSaludo = document.querySelector(".text-saludo");
const textEquipo = document.querySelector(".text-equipo");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = formulario.nombre.value.trim();
  const color = formulario.color.value;
  const equipoRadio = formulario.equipo;
  let equipoSeleccionado = null;

  for (const radio of equipoRadio) {
    if (radio.checked) {
      equipoSeleccionado = radio.value;
      break;
    }
  }

  if (!nombre || !color || !equipoSeleccionado) {
    resultado.textContent = "Por favor completa todos los campos.";
    return;
  }

  document.body.style.backgroundColor = color.toLowerCase();
  userPage.style.display = "block";
  formulario.style.display = "none";
  textSaludo.textContent = `Hola, ${nombre}!`;

  const pEquipo = userPage.querySelector("p");
  pEquipo.innerHTML = `Perteneces al equipo <span class="text-equipo">${equipoSeleccionado}</span>`;

  switch (equipoSeleccionado.toLowerCase()) {
    case "gatos":
      imgEquipo.src = "gatos.webp";
      imgEquipo.alt = "Equipo Gatos";
      break;
    case "mapaches":
      imgEquipo.src = "mapaches.webp";
      imgEquipo.alt = "Equipo Mapaches";
      break;
    case "perros":
      imgEquipo.src = "perros.jpg";
      imgEquipo.alt = "Equipo Perros";
      break;
    default:
      imgEquipo.src = "";
      imgEquipo.alt = "";
  }

  resultado.textContent = "";
});

btnCerrarSesion.addEventListener("click", () => {
  userPage.style.display = "none";
  formulario.style.display = "block";
  formulario.reset();
  document.body.style.backgroundColor = "#f0f4f8";
});
