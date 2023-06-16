// 20.	Leer la fecha de nacimiento de 300 personas. Calcular e imprimir sus edades. 

let fechaNacimiento = 0;
let edad = 0;
let edadPromedio = 0;
let genero = "";
let edadHombres = 0;
let edadMujeres = 0;
let contH = 0;
let contM = 0;
let edadProH = 0;
let edadProM = 0;

const fechaActual = prompt(`Ingrese la fecha actual:`);

for (let i = 1; i <= 5; i++) {

    edad = 0;
    genero = "";
    edadHombres = 0;
    edadMujeres = 0;

    fechaNacimiento = prompt(`Ingrese el año de nacimiento de la persona ${i},  0 para salir`);
    genero = prompt(`Ingrese el genero de la persona ${i} (H) Hombre, (M) Mujer, 0 para salir`).toUpperCase();

    if (fechaNacimiento == 0 || genero == 0) {
        break;
    }

    edad = fechaActual - fechaNacimiento;

    if (genero == "H") {
        contH++;
        edadHombres = fechaActual - fechaNacimiento;
    } else if (genero == "M") {
        contM++;
        edadMujeres = fechaActual - fechaNacimiento;
    } else {
        console.log(`Genero incorrecto`);
    }

    edadPromedio += edad;
    edadProH += edadHombres;
    edadProM += edadMujeres;
    console.log(`La edad de la persona ${i} es: ${edad} y su genero es: ${genero}`);

}
console.log(`El promedio de edad de las 300 personas es: ${edadPromedio / 5}`);
console.log(`El promedio de edad de los hombres es: ${edadProH / contH}`);
console.log(`El promedio de edad de las mujeres es: ${edadProM / contM}`);
console.log(`El porcentaje de hombres es: ${contH * 100 / 5} %`);
console.log(`El porcentaje de mujeres es: ${contM * 100 / 5} %`);