
class PriceCalculator {
  calculateTotalPrice(price: number, taxRate: number): number {
    return price + (price * taxRate);
  }
}

class Order {
  price: number;
  taxRate: number;

  constructor(price: number, taxRate: number) {
    this.price = price;
    this.taxRate = taxRate;
  }

  getTotalPrice(): number {
    const calculator = new PriceCalculator();
    return calculator.calculateTotalPrice(this.price, this.taxRate);
  }
}

const order = new Order(100, 0.2);
console.log(order.getTotalPrice());
