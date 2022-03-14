const precio_original = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentaje_de_precio_con_descuento = 100 - descuento;
    const precioConDescuento = (precio * porcentaje_de_precio_con_descuento) / 100;

    return precioConDescuento;
}

// console.log({
//     precio_original,
//     descuento,
//     porcentaje_de_precio_con_descuento,
//     precioConDescuento
// });