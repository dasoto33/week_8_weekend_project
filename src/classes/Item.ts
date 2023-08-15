import { v4 as uuidv4 } from 'uuid'

export default class Item {
    private id: string 
    private name: string
    private price: number
    private description: string
    // private quantity: number 

    constructor(name: string, price: number, description: string) {
        this.id = uuidv4()
        this.name = name
        this.price = price
        this.description = description
        // this.quantity = quantity
    }

    // public getters
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getPrice() {
        return this.price
    }
    public getDescription() {
        return this.description
    }
    // public getQuantity() {
    //     return this.quantity
    // }

    // public setters
    public setName(name: string) {
        this.name = name
    }
    public setPrice(price: number) {
        this.price = price
    }
    public setDescription(description: string) {
        this.description = description
    }
    // public setQuantity() {
    //     this.quantity = this.quantity
    // }
}





