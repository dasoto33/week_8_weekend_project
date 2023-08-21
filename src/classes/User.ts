import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import Shop from './Shop'

export default class User {
  private id: string;
  private name: string;
  private age: number;
  private cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  // Public getters
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getAge() {
    return this.age;
  }
  public getCart() {
    return this.cart;
  }

  // Public setters
  public setId(id: string) {
    this.id = id;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setAge(age: number) {
    this.age = age;
  }
  public setCart(cart: Item[]) {
    this.cart = cart;
  }

  // Method to add item to cart
  addToCart(item: Item) {
    this.cart.push(item);
  }

  // Method to remove item from cart
  removeFromCart(item: Item) {
    this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
  }

  // Method to add quantity to cart
  addQuantity(item: Item, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.cart.push(item);
    }
  }

  // Method to remove quantity from cart
  removeQuantityFromCart(item: Item, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      const index = this.cart.findIndex((cartItem) => cartItem.getId() === item.getId());
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  // Method to calculate total price of items in cart
  cartTotal() {
    return this.cart.reduce((total, item) => total + item.getPrice(), 0)
  }

  // Print function to view cart items
  printCart() {
    console.log('\nItems in your cart:')
    this.cart.forEach((item) => {
      console.log(`${item.getName()} - Price: ${item.getPrice()}`)
    });
  }

  showItems(): void {
    const shopDiv = document.getElementById('shop')
    if (shopDiv) {
      this.items.forEach((item) => {
        const itemElement = item.itemElement()
        shopDiv.appendChild(itemElement)
      })
    }
  }

  updateCart(): void {
    const cartDiv = document.getElementById('cart')
    if (cartDiv && Shop.myUser) {
      cartDiv.innerHTML = '' // Clear previous cart contents

      const cartElement = Shop.myUser.cartHTMLElement()
      cartDiv.appendChild(cartElement)

      Shop.myUser.addRemoveEventListeners()
    }
  }


  displayShopAndCart(): void {
    const shopDiv = document.getElementById('shop');
    const cartDiv = document.getElementById('cart');

    if (shopDiv && cartDiv) {
      shopDiv.innerHTML = ''
      cartDiv.innerHTML = ''

      // Call methods from the Shop class to show items and update cart
      Shop.myUser = this; // Set the myUser property in the Shop class

      // Show items in the shop section
      Shop.showItems()

      // Update and display the cart section
      Shop.updateCart()
    }
  }
}

  // Create an HTML Div Element for the cart
cartHTMLElement(): HTMLDivElement {
    const cartDiv = document.createElement('div')
    cartDiv.classList.add('cart')

    if (this.cart.length === 0) {
      const emptyCartMessage = document.createElement('p')
      emptyCartMessage.textContent = 'Your cart is empty.'
      cartDiv.appendChild(emptyCartMessage)
    } else {
      this.cart.forEach((item) => {
        const cartItemDiv = document.createElement('div')
        cartItemDiv.classList.add('cart-item')

        const itemName = document.createElement('span')
        itemName.textContent = item.getName()
        cartItemDiv.appendChild(itemName)

        const itemQuantity = document.createElement('span')
        itemQuantity.textContent = `Quantity: 1` // Modify this based on your implementation
        cartItemDiv.appendChild(itemQuantity)

        const itemPrice = document.createElement('span')
        itemPrice.textContent = `Price: $${item.getPrice()}`
        cartItemDiv.appendChild(itemPrice)

        const removeOneButton = document.createElement('button')
        removeOneButton.textContent = 'Remove One'
        removeOneButton.addEventListener('click', () => {
          // Add logic to remove one item from the cart
        });
        cartItemDiv.appendChild(removeOneButton);

        const removeAllButton = document.createElement('button')
        removeAllButton.textContent = 'Remove All'
        removeAllButton.addEventListener('click', () => {
          // Add logic to remove all instances of the item from the cart
        });
        cartItemDiv.appendChild(removeAllButton)

        cartDiv.appendChild(cartItemDiv)
      });

      const cartTotal = document.createElement('p')
      cartTotal.textContent = `Cart Total: $${this.cartTotal()}`
      cartDiv.appendChild(cartTotal)
    }

    return cartDiv
  }


  // Add event listeners for removing items from cart
  addRemoveEventListeners(): void {
    this.cart.forEach((item) => {
      const removeOneButton = document.getElementById(`remove-one-${item.getId()}`)
      const removeAllButton = document.getElementById(`remove-all-${item.getId()}`)

      if (removeOneButton && removeAllButton) {
        removeOneButton.addEventListener('click', () => {
          this.removeQuantityFromCart(item, 1) 
          this.updateCart(); // method to update and display the cart
        });

        removeAllButton.addEventListener('click', () => {
          this.removeFromCart(item)
          this.updateCart() 
        })
      }
    })
  }
}