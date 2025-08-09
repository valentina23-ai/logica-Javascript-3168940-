
// EJERCICIOS ARRAY

// 1. Crear array y mostrarlo
let articulos = ["Zapatos", "Camisa", "Reloj", "teléfono"];
document.write("<b>1. Artículos:</b> " + articulos + "<br><br>");

// 2. Mostrar el ítem “Reloj”
document.write("<b>2. Ítem Reloj:</b> " + articulos[2] + "<br><br>");

// 3. Cambiar el primer ítem del array (índice 0)
articulos[0] = "Sombrero";
document.write("<b>3. Array modificado:</b> " + articulos + "<br><br>");

// 4. Mostrar la cantidad de ítems con length
document.write("<b>4. Cantidad de ítems:</b> " + articulos.length + "<br><br>");

// 5. Añadir un nuevo ítem usando length
articulos[articulos.length] = "Mercedes";
document.write("<b>5. Array final:</b> " + articulos + "<br><br>");


// EJERCICIOS MATH + ARRAY

// 1. Lista de frutas

let frutas = ["Manzana", "Pera", "Banano", "Fresa", "Mango", "Uva", "Sandía", "Kiwi", "Melón", "Papaya", "Cereza"];

// Generar número aleatorio entre 0 y 10
let indice = Math.floor(Math.random() * frutas.length);
document.write("<b>Fruta aleatoria:</b> " + frutas[indice] + "<br><br>");

// 2. Juego de adivinar número
let numeroUsuario = parseInt(prompt("Adivina el número (1 al 10):"));
let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // entre 1 y 10

if (numeroUsuario === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste. El número era: " + numeroAleatorio);
} else {
    alert("Fallaste. El número correcto era: " + numeroAleatorio);
}