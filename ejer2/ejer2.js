// En un supermercado se hace una promoción, mediante la cual los clientes obtienen un descuento dependiendo de un número que se escoge al azar. Si el numero escogido es menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74 el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el número escogido sea diferente de 0.

let numero = 0;
let Precio = 0;


numero = prompt("Ingrese el numero de la suerte, 0 = salir");

while(numero != 0){

    Precio = prompt("Ingrese el precio del producto");

    if (numero < 74) {
        console.log(`El precio final es de: ${(PrecioFinal*15)/100}`);
    } else {
        console.log(`El precio final es de: ${(PrecioFinal*20)/100}`);
    }

}


