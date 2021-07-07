import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:

function getMaxPrice (alias: PriceBracket): number {
  switch (alias) {
    case PriceBracket.Low:
      return 10.0
    case PriceBracket.Medium:
      return 20.0
    default:
      return 30.0
  }
}

/// Add your getOrders() function below:

function getOrders (price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [[]]
  orders.forEach((restaurantOrders: Order[], ind: number) => {
    filteredOrders[ind] = restaurantOrders.filter((order: Order) => {
      return order.price <= getMaxPrice(price)
    })
  })

  return filteredOrders
}

// console.log(getOrders(PriceBracket.Medium, orders))

/// Add your printOrders() function below:

function printOrders (restaurants: Restaurant[], orders: Order[][]): void {
  orders.forEach((order: Order[], ind: number) => {
    console.log('=========')
    console.log(`Restaurant Name ${restaurants[ind].name}`)
    order.forEach((item: Order, ind: number) => {
      console.log(`- ${item.name}: \$${item.price}`)
    })
  })
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Medium, orders);
printOrders(restaurants, elligibleOrders);
