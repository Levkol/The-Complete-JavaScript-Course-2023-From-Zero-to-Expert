// Exporting module

console.log(`Exporting module`);

const shippingCost = [];
export const cart = [];

// Exporting varibles / f
export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

// Exporting multiple varibels
const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

// Default exports
export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}