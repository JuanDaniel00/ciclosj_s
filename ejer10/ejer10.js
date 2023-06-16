// Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de algún aparato si este cuesta $2000 o más. Además, independientemente de esto, ofrece un 5% de descuento si la marca es “NOSY”. Determinar cuánto pagaran, con IVA incluido, los clientes por la compra de su aparato. 

let precioEstereo = 0;
let marca = "";
let descuento = 0;
let descuentoMarca = 0;
let iva = 0;
let i = 0;

while(true){

    precioEstereo = parseInt(prompt("Ingrese el precio del estéreo: (0 para salir)"));

    if(precioEstereo == 0){
        break;
    }

    i++;

    marca = prompt("Ingrese la marca del estéreo:").toUpperCase();
    iva = parseFloat(prompt("Ingrese el IVA del estéreo:(ignore el %)"))/100;

    if(precioEstereo >= 2000){
        descuento = precioEstereo * 0.1;
    }else{
        descuento = 0;
    }

    if(marca == "NOSY"){
        descuentoMarca = precioEstereo * 0.05;
    }else{
        descuentoMarca = 0;
    }

    const precioFinal = precioEstereo - descuento - descuentoMarca + (precioEstereo * iva);

    console.log(`El precio final del estéreo ${i} es de $${precioFinal}`);

}