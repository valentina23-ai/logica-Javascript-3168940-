//boolean(...)

console.log(' "5" === "5" ', "5" == "5")//true
console.log(' "5" === "5" ', "5" === "5")//true
console.log(' 5 === "5" ', 5 === "5")//false
console.log(' 5 === "5" ', 5 == "5")//true
console.log(' 5 === (3+2) ', "5" ===  (3+2))//false
console.log(' 5 === 5 ', 5 === 5)//true

//concatenar (unir) (+)
console.log(5 + "3")//53
console.log(5 * "3")//15
console.log(5 + 3)//8

// pida dos números al usuario y sumelos//
let num1 = prompt('dame num1') // "5"
let num2 = prompt('dame num2') //"7"
let resultado= num1 + num2
alert("el rersultado de tu suma es " + resultado)

/* //TRABAJO//
// Pedir los valores al usuario
let a =Number( prompt("Ingresa el número A:"));
let b =Number(prompt("Ingresa el número B:"));


// Hacemos las operaciones
let suma = a + b;
let resta = a - b;
let multiplicación = a * b;
let division = a / b;

// Mostramos los resultados con alert
alert("Tú escribiste:\nA = " + a + "\nB = " + b);
alert("La suma es: " + suma);
alert("La resta es: " + resta);
alert("La multiplicación es: " + multiplicación);
alert("La división es: " + division);

// También mostramos los resultados en la consola
console.log("A =", a);
console.log("B =", b);
console.log("Suma =", suma);
console.log("Resta =", resta);
console.log("Multiplicación =", multiplicación);
console.log("División =", división); */

//
console.log(`Tu numero es ${numA}`)


