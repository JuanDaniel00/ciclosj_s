// En un supermercado se hace una promoción, mediante la cual los clientes obtienen un descuento dependiendo de un número que se escoge al azar. Si el numero escogido es menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74 el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el número escogido sea diferente de 0.

let numero = 0;
let Precio = 0;
let PrecioFinal = 0;


while(true){

    numero = parseInt(prompt("Ingrese un número al azar, 0 para salir"));

    if (numero == 0) {
        break;
    }
    
    Precio = prompt("Ingrese el precio total de la compra");

    if (numero < 74) {
        PrecioFinal = Precio - (Precio*15)/100;
        console.log(`El precio final es de: ${PrecioFinal} con el descuento del 15%`);
    } else {
        PrecioFinal = Precio - (Precio*20)/100;
        console.log(`El precio final es de: ${PrecioFinal} con el descuento del 20%`);
    }

}


