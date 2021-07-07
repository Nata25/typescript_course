"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(alias) {
    switch (alias) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        default:
            return 30.0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [[]];
    orders.forEach(function (restaurantOrders, ind) {
        filteredOrders[ind] = restaurantOrders.filter(function (order) {
            return order.price <= getMaxPrice(price);
        });
    });
    return filteredOrders;
}
// console.log(getOrders(PriceBracket.Medium, orders))
/// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    orders.forEach(function (order, ind) {
        console.log('=========');
        console.log("Restaurant Name " + restaurants[ind].name);
        order.forEach(function (item, ind) {
            console.log("- " + item.name + ": $" + item.price);
        });
    });
}
/// Main
var elligibleOrders = getOrders(orders_1.PriceBracket.Medium, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
