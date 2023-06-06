//Una institución educativa estableció un programa para estimular a los alumnos con buen rendimiento académico y que consiste en la siguiente tabla: 
// •	Si el promedio es de 9.5 o más y el alumno es de preparatoria, entonces este podrá cursar 55 unidades y se le hará un 25% de descuento. 
// •	Si el promedio es mayor o igual a 9 pero menor que 9.5 y el alumno es de preparatoria, entonces este podrá cursar 50 unidades y se le hará un 10% de descuento. 
// •	Si el promedio es mayor que 7 y menor que 9 y el alumno es de preparatoria, este podrá cursar 50 unidades y no tendrá ningún descuento. 
// •	Si el promedio es de 7 o menor, el número de materias reprobadas es de 0 a 3 y el alumno es de preparatoria, entonces podrá cursar 45 unidades y no tendrá descuento.  
// •	Si el promedio es de 7 o menor, el número de materias reprobadas es de 4 o más y el alumno es de preparatoria, entonces podrá cursar 40 unidades y no tendrá ningún descuento. 
// •	Si el promedio es mayor o igual a 9.5 y el alumno es de profesional, entonces podrá cursar 55 unidades y se le hará un 20% de descuento. 
// •	Si el promedio es menor de 9.5 y el alumno es de profesional, entonces podrá cursar 55unidades y no tendrá descuento 
// Obtener el total que tendrá que pagar un alumno si la matrícula para alumnos de profesional es de $80.000 por cada cinco unidades y para alumnos de preparatoria es de $50.000 por cada cinco unidades. 

let alumnos = parseInt(prompt("Ingrese el número de alumnos:"));


for (i = 1; i <= alumnos; i++) {

    let promedio = 0;
    let unidades = 0;
    let nivel = "";
    let unidadesReprobadas = 0;
    let costoUnidad = 0;

    promedio = parseFloat(prompt(`Ingrese el promedio del alumno ${i}:`));
    nivel = prompt(`Ingrese el nivel del alumno ${i}: (P para profesional o E para preparatoria)`).toUpperCase();
    unidadesReprobadas = parseInt(prompt(`Ingrese las unidades reprobadas del alumno ${i}:`));

    let descuento = 0;
    let total = 0;

    if (promedio >= 9.5 && nivel == "P") {
        unidades = 55;
        descuento = 0.2;
        costoUnidad = 80000 / 5;
        
    } else if (promedio < 9.5 && nivel == "P") {

        unidades = 55;
        descuento = 0;
        costoUnidad = 80000 / 5;

    } else if (promedio >= 9.5 && nivel == "E") {

        unidades = 55;
        descuento = 0.25;
        costoUnidad = 50000 / 5;

    } else if (promedio >= 9 && promedio < 9.5 && nivel == "E") {

        unidades = 50;
        descuento = 0.1;
        costoUnidad = 50000 / 5;

    } else if (promedio > 7 && promedio < 9 && nivel == "E") {
        unidades = 50;
        descuento = 0;
        costoUnidad = 50000 / 5;
    }

    if (promedio <= 7 && nivel == "E" && unidadesReprobadas >= 0 && unidadesReprobadas <= 3) {

        unidades = 45;
        descuento = 0;
        costoUnidad = 50000 / 5;


    } else if (promedio <= 7 && nivel == "E" && unidadesReprobadas >= 4) {

        unidades = 40;
        descuento = 0;
        costoUnidad = 50000 / 5;
        
    }

    total = unidades * costoUnidad * (1 - descuento);

    console.log(`El alumno ${i} debe pagar $${total} y tiene un descuento de $${descuento}`);
}