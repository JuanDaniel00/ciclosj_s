// Una frutería ofrece las manzanas con descuento según la siguiente tabla:  
// KILOS COMPRADOS:

//         % DESCUENTO   |	  0% 	|     10% 	  |    15%    |	  20%     |
//            KILOS 	  |  0-2    |   2.01 - 5  | 5.01 - 10 |	 10.01 +  |

// Determinar cuánto pagaran N personas que compren manzanas es esa frutería. 

let clientes = parseInt(prompt("Ingrese el número de clientes:"));


for (let i = 1; i <= clientes; i++) {

    let kilosManzanas = parseFloat(prompt(`Ingrese los kilos de manzanas que comprará el cliente ${i}:`));
    let precioKilo = parseInt(prompt(`Ingrese el precio por kilo de manzanas:`));
    let descuento = 0;

    if (kilosManzanas >= 0 && kilosManzanas <= 2) {

        descuento = 0;

    } else if (kilosManzanas >= 2.01 && kilosManzanas <= 5) {

        descuento = precioKilo * 0.1;

    } else if (kilosManzanas >= 5.01 && kilosManzanas <= 10) {

        descuento = precioKilo * 0.15;

    } else if (kilosManzanas >= 10.01) {

        descuento = precioKilo * 0.2;

    }

    preciofinal = kilosManzanas * precioKilo - descuento;

    console.log(`El cliente ${i} tiene un descuento de $${descuento} y debe pagar $${preciofinal}`);
}