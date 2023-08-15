import Item from './Item';

export default class Shop {
    private items: Item[]

    constructor() {
        this.items = []

        const apple = new Item("Apple", 3, "Red Delicious")
        const iceCream = new Item("Ice Cream", 8, "Mint Chocolate Chip")
        const flowers = new Item("Flowers", 6, "Sunflowers")

        this.items.push(apple, iceCream, flowers)
    }

    public getItems(): Item[] {
        return this.items
    }

    public setItems(items: Item[]): void {
        this.items = items
    }
}