"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var dollarSigns = '$$';
var deliveryTimeMax = '90';
var maxDistance = 10;
var result;
// let hour: number = new Date().getHours();
var hour = 11;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurants_1.default.filter(function (restaurant) {
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    if (+restaurant.openHour > hour || +restaurant.closeHour < hour) {
        return;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = "We found " + filteredRestaurants.length + " restaurants, the first is " + filteredRestaurants[0].name + ".";
}
console.log(result);
