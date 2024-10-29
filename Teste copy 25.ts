class InventoryManager {
    addItem(item: string, quantity: number): void {
        console.log(`Added ${quantity} of ${item} to inventory.`);
    }

    removeItem(item: string, quantity: number): void {
        console.log(`Removed ${quantity} of ${item} from inventory.`);
    }

    checkStock(item: string): number {
        return Math.floor(Math.random() * 100);
    }
}

class InventoryService {
    private manager: InventoryManager;

    constructor(manager: InventoryManager) {
        this.manager = manager;
    }

    addItem(item: string, quantity: number): void {
        this.manager.addItem(item, quantity);
    }

    removeItem(item: string, quantity: number): void {
        this.manager.removeItem(item, quantity);
    }

    checkStock(item: string): number {
        return this.manager.checkStock(item);
    }
}
