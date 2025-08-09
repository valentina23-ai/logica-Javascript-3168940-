
// 1 y 2. While con múltiplos de 5

let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
let i = 1;

document.write("<b>Multiplos de 5 usando WHILE:</b><br>");
while (i <= numeroUsuario) {
    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
    i++;
}

// 3. Do While (mismo problema)

let numeroDoWhile = parseInt(prompt("Ingrese otro numero para Do While:"));
let j = 1;

document.write("<br><b>Multiplos de 5 usando DO WHILE:</b><br>");
do {
    if (j % 5 === 0) {
        document.write(j + "<br>");
    }
    j++;
} while (j <= numeroDoWhile);


// Imprimir los números impares del 1 al 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 5. For - Lista del 1 al 100 excluyendo rango

let inicioRango = parseInt(prompt("Ingrese el inicio del rango a excluir:"));
let finRango = inicioRango + 9; // rango de 10 números

document.write("<br><b>Lista del 1 al 100 excluyendo rango de " + inicioRango + " a " + finRango + ":</b><br>");
for (let m = 1; m <= 100; m++) {
    if (m < inicioRango || m > finRango) {
        document.write(m + " ");
    }
}
