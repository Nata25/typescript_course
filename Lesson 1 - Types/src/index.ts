import products from './products'

type Product = {
  name: string,
  price: string,
  preOrder: string
}

let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
let shippingAddress: string
shippingAddress = 'Ukraine'

let productName: string 
productName = products[0].name
let findProduct: (p: Product) => boolean
findProduct = p => p.name === productName;
let items: Product[] = products
let product = items.find(findProduct)
console.log(product)
if (product) {
  if (product.preOrder === 'true') {
    console.log('We`re preparing your order');
  }

  if (+product.price >= 25) {
    shipping = 0
    console.log('Free shipping!')
  } else shipping = 5

  if (shippingAddress.indexOf('New York') !== -1) {
    taxPercent = 0.1
  } else taxPercent = 0.05

  taxTotal = +product.price * taxPercent
  total = +product.price + taxTotal + shipping
  console.log(`Thank you for purchasing ${product.name}!`)
  console.log(`Your shipping address is ${shippingAddress}`)
  console.log(`Product price is ${product.price} and the shipping is ${shipping}.`)
  console.log(`Total price including taxes is ${total}.`)
  
}
