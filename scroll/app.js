const main = document.querySelector("#main");
const valorVertical = document.querySelector('.valor-vertical');
const valorHorizontal = document.querySelector('.valor-horizontal');
const pelota = document.querySelector('#pelota');

console.log(main);
console.log(valorVertical);
console.log(valorHorizontal);

function verscroll() {
let top = main.scrollTop;
let left = main.scrollLeft;
valorVertical.textContent = `V: ${top}`;
valorHorizontal.textContent = `H: ${left}`;
pelota.style.top = `${top}px`
pelota.style.left = `${left}px`
pelota.style.transform = `scale(${(top/30)})`
} 

main.addEventListener("scroll", verscroll);