class DiscountCalculator {
    calculateDiscount(price: number): number {
      return price * 0.1;
    }
  }
  
  class Product {
    price: number;
  
    constructor(price: number) {
      this.price = price;
    }
  
    applyDiscount(): number {
      const calculator = new DiscountCalculator();
      return this.price - calculator.calculateDiscount(this.price);
    }
  }
  