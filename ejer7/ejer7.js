//70 personas se encuentran con un problema de comprar un automóvil o un terreno, los cuales cuestan exactamente lo mismo. Sabe que mientras el automóvil se devalúa, con el terreno sucede lo contrario. Esta persona comprara el automóvil si al cabo de tres años la devaluación de este no es mayor que la mitad del incremento del valor del terreno. Ayúdale a estas personas a determinar si deben o no comprar el automóvil


let i = 1;

const valorInicial = parseInt(prompt("Ingrese el valor inicial del automovil y el terreno:"));

let valorTerreno = valorInicial;
let valorAuto = valorInicial;

const incrementoAnualTerreno = parseInt(prompt("Ingrese el incremento anual del valor del terreno en porcentaje (ignore el %): "));
const devaluacionAnualAuto = parseInt(prompt("Ingrese la devaluación anual del automovil en porcentaje (ignore el %):"));

while (i <= 3) {
  valorTerreno += valorTerreno * (incrementoAnualTerreno / 100);
  valorAuto -= valorAuto * (devaluacionAnualAuto / 100);
  i++;
}

if (valorAuto <= valorTerreno / 2) {
  console.log("Es recomendable comprar el automóvil.");
} else {
  console.log("Es recomendable comprar el terreno.");
}