function price(order) {
   //price is base price ­ quantity discount + shipping
    let basePrice = order.quantity * order.itemPrice;
    let discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shippingFee = Math.min(basePrice * 0.1, 100);
    return basePrice - discount + shippingFee;
}