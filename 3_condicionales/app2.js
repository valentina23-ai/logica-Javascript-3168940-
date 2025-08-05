//Ejercicio 1
// Pedimos el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Pedimos la edad del usuario y la convertimos a número
let edad = Number(prompt("¿Cuántos años tienes?"));

// Verificamos si el nombre es "mario" o "carlos" (sin importar mayúsculas)
if (nombre.toLowerCase() === "mario" || nombre.toLowerCase() === "carlos") {
  // Si se llama Mario o Carlos, puede entrar a zona VIP
  alert("Bienvenido a la zona VIP");

} else if (edad >= 18) {
  // Si no se llama Mario o Carlos pero tiene 18 o más, puede entrar
  alert("Puedes ingresar a la discoteca");

} else {
  // Si no cumple ninguna de las condiciones anteriores, no puede entrar
  alert("No puedes ingresar a la discoteca");
}


 //Ejercicio 2
 // Pedimos la estatura en cm
let estatura = Number(prompt("¿Cuál es tu estatura en cm?"));

// Pedimos la velocidad en segundos (100 km planos)
let velocidad = Number(prompt("¿Cuál es tu velocidad en hora para 100 km?"));

// Pedimos la edad
let edad2 = Number(prompt("¿Cuántos años tienes?"));

// Verificamos si cumple con los requisitos de estatura y velocidad
if (estatura >= 170 && velocidad >= 12) {

  // Si cumple, ahora verificamos la edad para saber a qué grupo va
  if (edad2 < 18) {
    alert("Puedes ingresar a las divisiones menores del equipo");
  } else {
    alert("Puedes ingresar al equipo profesional");
  }

} else {
  // Si no cumple con estatura y velocidad, no puede ingresar
  alert("No cumples con los requisitos para ingresar al equipo");
}

