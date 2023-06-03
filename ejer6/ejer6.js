// Unas fábricas han sido sometidas a un programa de control de contaminación para lo cual se efectúa una revisión de los puntos IMECA generados por la fábrica. El programa de control de contaminación consiste en medir los puntos IMECA que emite la fábrica en cinco días de una semana y si el promedio es superior a los 170 puntos entonces tendrá la sanción de parar su producción por una semana y una multa del 50% de las ganancias diarias cuando no se detiene la producción. Si el promedio obtenido de puntos IMECA es de 170 o menor entonces no tendrá ni sanción ni multa. Los dueños de las fábricas desean saber cuánto dinero perderá después de ser sometido a la revisión

let fabricas = 0;
let puntos = 0;
let promedio = 0;
let multa = 0;
let ganancias = 0;
let total = 0;

fabricas = parseInt(prompt("Ingrese el número de fabricas a revisar"));

for (let i = 1; i <= fabricas; i++) {

    promedio = 0;

    ganancias = parseInt(prompt(`Ingrese las ganancia total en 5 dias de la fabrica ${i}`));

    for (let j = 1; j <= 5; j++) {
        puntos = parseInt(prompt(`Ingrese los puntos IMECA de la fabrica ${i} en el día ${j}`));
        promedio = promedio + puntos;
    }

    promedio = promedio / 5;

    if (promedio > 170) {
        multa = (ganancias * 50) / 100;
        total = ganancias - multa;
        console.log(`La fabrica ${i} debe pagar: ${total} de sus ganacias diarias`);
    } else {
        console.log(`La fabrica ${i} no debe pagar multa`);
    }

    
}