// En un almacén se ha establecido una promoción de las llantas marca “Ponchadas”, dicha promoción consiste en lo siguiente: Si se compran menos de cinco llantas el precio es de $300 cada una, de $250 si se compran de cinco a 10 y de $200 si se compran mas de 10. Obtener la cantidad de dinero que N personas tienen que pagar por cada una de las llantas que compra y la que tiene que pagar por el total de la compra. 

let clientes = parseInt(prompt("Ingrese el número de clientes:"));
let precioLlanta = 0;

for(i=1 ; i <= clientes ; i++){

    let cantidadLlantas = parseInt(prompt(`Ingrese la cantidad de llantas que comprará el cliente ${i}:`));

    if(cantidadLlantas < 5){
        precioLlanta = 300;
    }else if(cantidadLlantas >= 5 && cantidadLlantas < 10){
        precioLlanta = 250;
    }else if(cantidadLlantas >= 10){
        precioLlanta = 200;
    }

    console.log(`El cliente ${i} debe pagar $${precioLlanta * cantidadLlantas} y y cada llanta cuesta $${precioLlanta}` );
}
