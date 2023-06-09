// Una compañía de seguros está abriendo un departamento de finanzas y ha establecido un programa para captar clientes. El programa se basa en las siguientes condiciones: si el monto por el que se efectúa la fianza es menor que $50,000, la cuota a pagar será el 3% del monto. Por otro lado, si el monto es mayor que $50,000, la cuota a pagar será el 2% del monto. La afianzadora desea determinar la cuota que debe pagar cada cliente.

let monto = 0;
let cuota = 0;
let clientes = 0;

monto = parseInt(prompt("Ingrese el monto de la fianza para el primer cliente"));

while (monto != 0) {

    clientes++;

    if (monto < 50000) {
        cuota = (monto * 3) / 100;
    } else {
        cuota = (monto * 2) / 100;
    }

    console.log(`La cuota a pagar del cliente ${clientes } es de: ${cuota}`);

    monto = parseInt(prompt(`Precione 0 para salir, o ingrese el monto de la fianza para el cliente ${clientes + 1}`));
}
