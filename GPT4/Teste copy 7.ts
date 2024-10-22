class CurrencyConverter {
    convertToUSD(amount: number, rate: number): number {
      return amount * rate;
    }
  }
  
  class Wallet {
    balance: number;
  
    constructor(balance: number) {
      this.balance = balance;
    }
  
    getBalanceInUSD(rate: number): number {
      const converter = new CurrencyConverter();
      return converter.convertToUSD(this.balance, rate);
    }
  }
  