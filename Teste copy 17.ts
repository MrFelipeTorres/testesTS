class PaymentService {
    processPayment(amount: number): boolean {
        return amount > 0;
    }
}

class OrderService {
    private paymentService: PaymentService;

    constructor(paymentService: PaymentService) {
        this.paymentService = paymentService;
    }

    processPayment(amount: number): boolean {
        return this.paymentService.processPayment(amount);
    }
}
