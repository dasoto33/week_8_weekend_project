import { v4 as uuidv4 } from 'uuid'
import Item from './Item'

export default class User {
    private id: string 
    private name: string
    private age: number
    private cart: Item[]

    constructor(name: string, age: number) {
        this.id = uuidv4()
        this.name = name
        this.age = age
        this.cart = []
    }
// public getters
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getAge() {
        return this.age
    }
    public getCart() {
        return this.cart
    }

    // public setters
    public setId(id: string) {
        this.id = id
    }
    public setName(name: string) {
        this.name = name
    }
    public setAge(age: number) {
        this.age = age
    }
    public setCart(cart: Item[]) {
        this.cart = cart
    }

    //method to add item to cart
    addToCart(item: Item) {
        this.cart.push(item)
    }

    //method to remove item from cart
    removeFromCart(item: Item) {
        this.cart = this.cart.filter(cartItem => cartItem.getId() !== item.getId())
    }

    //method to add quantity to cart
    addQuantity(item: Item, quantity: number) {
        for (let i=0; i < quantity; i++) {
            this.cart.push(item)
        }
    }

    //method to remmove quanitity from cart
    removeQuantityFromCart(item: Item, quantity: number) {
        for (let i=0; i > quantity; i-1) {
            this.cart.push(item)
        }
    }

    // method to calculate total proce of items in cart
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice(), 0)
    }

    // print function to view cart items
    printCart() {
        console.log('\nItems in your cart:')
        this.cart.forEach(item => {
            console.log(`${item.getName()} - Price: ${item.getPrice()}`)
        })
    }
}