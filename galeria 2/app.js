const titulo = document.querySelector(".titulo")
const screen = document.querySelector(".screen")
const miniaturas = document.querySelectorAll(".miniatura")
const body = document.querySelector("body")

console.log(titulo) 
console.log(screen)
console.log(miniaturas) 

function cambiarImg(event) {
  const nuevaSrc = event.target.src
  const nuevoTitulo = event.target.name


  screen.src = nuevaSrc

  titulo.textContent = nuevoTitulo

  body.style.backgroundImage = `url(${nuevaSrc})`
  body.style.backgroundSize = "cover"
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundPosition = "center"
}


miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click", cambiarImg)
})
