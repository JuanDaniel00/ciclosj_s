// En una escuela la matrícula de los 38 alumnos se determina según el número de materias que cursan. El costo de todas las materias es el mismo. Además, se ha establecido un programa para estimular a los alumnos, el cual consiste en lo siguiente: si el promedio obtenido por un alumno en el último periodo es mayor o igual que 9, se le hará un descuento del 30% sobre la matrícula y no se le cobrara IVA; si el promedio obtenido es menor que 9 deberá pagar la matrícula completa, la cual incluye el 10% de IVA. Obtener cuanto debe pagar cada alumno.

let matricula = 0;
let promedio = 0;
let descuento = 0;
let iva = 0;
let total = 0;

for (let i = 1; i <= 38; i++) {

	matricula = parseInt(prompt(`Ingrese el costo de la matricula para el alumno ${i}`));

	promedio = prompt(`Ingrese el promedio del alumno ${i} en el ultimo periodo`);

	if (promedio >= 9) {
		descuento = (matricula * 30) / 100;
		iva = 0;
	} else {
		descuento = 0;
		iva = (matricula * 10) / 100;
	}

	total = matricula - descuento + iva;

	console.log(`El alumno ${i} debe pagar: ${total}`);
}
