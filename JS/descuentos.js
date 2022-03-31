
function calcularPrecioConDescuento(precio, descuento){
    const porcentaje_de_precio_con_descuento = 100 - descuento;
    const precioConDescuento = (precio * porcentaje_de_precio_con_descuento) / 100;

    return resultPrice.innerText = "Tu precio a pagar luego de tu cupón es " + precioConDescuento;
}

// Esta función calcula los descuentos dependiendo de los datos indicados.

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "Tu precio a pagar es " + precioConDescuento;
}

// console.log({
//     precio_original,
//     descuento,
//     porcentaje_de_precio_con_descuento,
//     precioConDescuento
// });


// acá desarrollaremos una función que nos muestre un descuento en base al cupón que coloquemos.

function onClickButtonPriceCupon() {
    const inputPrice = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");

    const inputValue = inputPrice.value;
    const cuponValue = inputCupon.value;

    let descuento;

    switch (cuponValue) {
        case "cupon1":
            descuento = 25;
            calcularPrecioConDescuento(inputValue, descuento);
            break;
        case "cupon2":
            descuento = 20;
            calcularPrecioConDescuento(inputValue, descuento);
            break;
        case "cupon3":
            descuento = 18;
            calcularPrecioConDescuento(inputValue, descuento);
            break;
        default:
            resultPrice.innerText = "Ingrese un cupón válido";    
    }

}