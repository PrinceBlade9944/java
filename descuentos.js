//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;
    
    return precioConDescuento;
}

function onclickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const PriceP = document.getElementById("PriceP");
    PriceP.innerText = "El precio con descuento es $" + precioConDescuento;
}
  



//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//   precioConDescuento,
//})