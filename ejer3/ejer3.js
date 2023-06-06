// Para calcular el número de pulsaciones que deben tener N personas por cada 10 segundos de ejercicio aeróbico, se utiliza una fórmula diferente dependiendo del sexo de la persona. Si el sexo es femenino, la fórmula es la siguiente: num.pulsaciones = (220 - edad)/10 Si el sexo es masculino, la fórmula cambia a: num.pulsaciones = (210 - edad)/10

let genero = "";
let edad = 0;
let pulsaciones = 0;

let personas = parseInt(prompt("Ingrese el número de personas a calcular"));

for (let i = 1; i <= personas; i++) {

    genero = prompt(`Digite el sexo de la persona ${i} M/F `).toUpperCase();
    edad = parseInt(prompt(`Ingrese la edad de la persona ${i}`));

    if (genero == "M") {
        pulsaciones = (210 - edad) / 10;
    }else if (genero == "F") {
        pulsaciones = (220 - edad) / 10;
    }else{
        console.log("El sexo ingresado no es valido");
    }
    
    console.log(`El número de pulsaciones de la persona ${i} es de: ${pulsaciones} por cada 10 segundos`);
}
