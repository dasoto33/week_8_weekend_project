import Item from './Item';
import User from './User';

export default class Shop {
  private items: Item[];

  static myUser: User | undefined

  constructor() {
    this.items = []

    const apple = new Item('Apple', 3, 'Red Delicious')
    const iceCream = new Item('Ice Cream', 8, 'Mint Chocolate Chip')
    const flowers = new Item('Flowers', 6, 'Sunflowers')

    this.items.push(apple, iceCream, flowers)
  }

  public getItems(): Item[] {
    return this.items
  }

  // Display items in the shop section
  showItems(): void {
    const shopDiv = document.getElementById('shop')
    if (shopDiv) {
      this.items.forEach((item) => {
        const itemElement = item.itemElement()
        shopDiv.appendChild(itemElement)
      });
    }
  }

  // Update cart contents and display
  updateCart(): void {
    const cartDiv = document.getElementById('cart')
    if (cartDiv) {
      cartDiv.innerHTML = ''
      if (Shop.myUser) {
        const cartElement = Shop.myUser.cartHTMLElement()
        cartDiv.appendChild(cartElement)
        Shop.myUser.addRemoveEventListeners()
      }
    }
  }

  // Create a user and set myUser, build Shop and Cart elements
  static loginUser(event: Event): void {
    event.preventDefault();

    const nameInput = <HTMLInputElement>document.getElementById('name')
    const ageInput = <HTMLInputElement>document.getElementById('age')

    if (nameInput && ageInput) {
      const name = nameInput.value
      const age = parseInt(ageInput.value)

      if (name && age) {
        Shop.myUser = new User(name, age)
        Shop.myUser.displayShopAndCart()
      }
    }
  }
}