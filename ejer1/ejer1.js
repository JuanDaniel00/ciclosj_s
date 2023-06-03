// Calcular el total que 10 personas deben pagar en un almacén de llantas, si el precio de cada llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.

let llantas = 0;
let Precio = 0;
let PrecioFinal = 0;
let Total = 0;


for (let i = 1; i <= 10 ; i++){
    llantas = parseInt(prompt("Ingrese el número de llantas a comprar"));
    Precio = 800;

    if (llantas >= 5) {
        Precio = 700;
    }

    PrecioFinal = Precio * llantas;
    console.log(`El precio final de la persona ${i} es de: ${PrecioFinal}`);
    
}