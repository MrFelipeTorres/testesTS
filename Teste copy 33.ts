class InventoryLogger {
    logItemAdded(item: string, quantity: number): void {
        console.log(`${quantity} of ${item} added to inventory.`);
    }

    logItemRemoved(item: string, quantity: number): void {
        console.log(`${quantity} of ${item} removed from inventory.`);
    }

    logInventoryChecked(item: string): void {
        console.log(`Checked inventory for ${item}`);
    }
}

class InventoryLogService {
    private logger: InventoryLogger;

    constructor(logger: InventoryLogger) {
        this.logger = logger;
    }

    logItemAdded(item: string, quantity: number): void {
        this.logger.logItemAdded(item, quantity);
    }

    logItemRemoved(item: string, quantity: number): void {
        this.logger.logItemRemoved(item, quantity);
    }

    logInventoryChecked(item: string): void {
        this.logger.logInventoryChecked(item);
    }
}
