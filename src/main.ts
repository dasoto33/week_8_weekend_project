// import Item from './classes/Item'
import User from './classes/User'
import Shop from './classes/Shop'

const shop = new Shop()

// Create user
const user = new User("David Soto", 25)

// Add items to cart
user.addToCart(shop.getItems()[0]) 
user.addToCart(shop.getItems()[1]) 
user.addToCart(shop.getItems()[2]) 

console.log("Original Cart:")
user.printCart() 

// Add quantity
user.addQuantity(shop.getItems()[1], 3)
console.log("\nUpdated quantity:")
user.printCart()

// Remove items from cart
user.removeFromCart(shop.getItems()[0])
console.log("\nUpdated items (after removed):") 
user.printCart() 

// Remove quantity from cart
user.removeQuantityFromCart(shop.getItems()[1], 1) // Remove 1 instance of the second item from the cart
console.log("\nRemoved quantity:")
user.printCart() 

console.log("\nTotal cart value:", user.cartTotal()) // Calculate and print the total cart value

// Create a new user
user.setName("Thanos")
user.setAge(450)

console.log("\nNew user:", user.getName(), user.getAge())