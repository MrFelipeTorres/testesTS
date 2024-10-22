class Multiplier {
    multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  class Calculator {
    calculateProduct(a: number, b: number): number {
      const multiplier = new Multiplier();
      return multiplier.multiply(a, b);
    }
  }
  