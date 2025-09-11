//seleccionar los elementos con los que va a interactuar o los que responden a la interacción

const pantalla = document.querySelector(".pantalla")
const btnmenos = document.querySelector(".btn-menos")
const btnmas = document.querySelector(".btn-mas")
const body = document.body;
let counter = 0

//2. función
function sumar () {
counter++

if(counter>=10){
    pantalla.style.color = "red"
}

  pantalla.textContent = counter

  if(counter>=30){
    body.style.backgroundColor = "pink"
}

} 

function restar () {
counter--

if (counter <= 0) return;  
  counter--; 
  
if (counter<=10) {
    pantalla.style.color = "black"
}
pantalla.textContent = counter
  if(counter<=30){
    body.style.backgroundColor = "white"
}

}


//3. crear el evento 
btnmas.addEventListener("click", sumar)
btnmenos.addEventListener("click", restar)={


}