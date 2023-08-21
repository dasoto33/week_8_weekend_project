import { v4 as uuidv4 } from 'uuid';

export default class Item {
  private id: string;
  private name: string;
  private price: number;
  private description: string;

  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
  }

    // Public getters
    public getId(): string {
        return this.id;
      }
    
      public getName(): string {
        return this.name;
      }
    
      public getPrice(): number {
        return this.price;
      }
    
      public getDescription(): string {
        return this.description;
      }

  // Create an HTML Div Element representing an item
  itemElement(): HTMLDivElement {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.textContent = this.name;
    itemDiv.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = this.description;
    itemDiv.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: $${this.price}`;
    itemDiv.appendChild(itemPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      // Add item to cart logic here
    });
    itemDiv.appendChild(addToCartButton);

    return itemDiv;
  }
}