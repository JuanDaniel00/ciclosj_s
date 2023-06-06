// En una fábrica de computadoras se planea ofrecer a los clientes un descuento que dependerá del número de computadoras que compre. Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra; si el número de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora es de $11,000 


let clientes = parseInt(prompt("Ingrese el número de clientes:"));
let precioPc = 11000;
let descuento = 0;

for(i=1 ; i <= clientes ; i++){

    let cantidadPc = parseInt(prompt(`Ingrese la cantidad de computadoras que comprará el cliente ${i}:`));

    if(cantidadPc < 5){
        descuento = precioPc * 0.1;
    }else if(cantidadPc >= 5 && cantidadPc < 10){
        descuento = precioPc * 0.2;
    }else if(cantidadPc >= 10){
        descuento = precioPc * 0.4;
    }

    console.log(`El cliente ${i} tiene un descuento de $${descuento} y debe pagar $${precioPc - descuento}`);
}