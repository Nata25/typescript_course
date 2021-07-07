"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
shippingAddress = 'Ukraine';
var productName;
productName = products_1.default[0].name;
var findProduct;
findProduct = function (p) { return p.name === productName; };
var items = products_1.default;
var product = items.find(findProduct);
console.log(product);
if (product) {
    if (product.preOrder === 'true') {
        console.log('We`re preparing your order');
    }
    if (+product.price >= 25) {
        shipping = 0;
        console.log('Free shipping!');
    }
    else
        shipping = 5;
    if (shippingAddress.indexOf('New York') !== -1) {
        taxPercent = 0.1;
    }
    else
        taxPercent = 0.05;
    taxTotal = +product.price * taxPercent;
    total = +product.price + taxTotal + shipping;
    console.log("Thank you for purchasing " + product.name + "!");
    console.log("Your shipping address is " + shippingAddress);
    console.log("Product price is " + product.price + " and the shipping is " + shipping + ".");
    console.log("Total price including taxes is " + total + ".");
}
