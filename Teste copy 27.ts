class PaymentProcessor {
    processCreditCard(amount: number): string {
        return `Processed credit card payment of $${amount}`;
    }

    processPayPal(amount: number): string {
        return `Processed PayPal payment of $${amount}`;
    }

    processBitcoin(amount: number): string {
        return `Processed Bitcoin payment of $${amount}`;
    }
}

class PaymentService2 {
    private processor: PaymentProcessor;

    constructor(processor: PaymentProcessor) {
        this.processor = processor;
    }

    processCreditCard(amount: number): string {
        return this.processor.processCreditCard(amount);
    }

    processPayPal(amount: number): string {
        return this.processor.processPayPal(amount);
    }

    processBitcoin(amount: number): string {
        return this.processor.processBitcoin(amount);
    }
}
