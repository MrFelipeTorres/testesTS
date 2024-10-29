class ProductUpdater {
    updateProductName(productId: number, newName: string): boolean {
        console.log(`Product ${productId} name updated to ${newName}`);
        return true;
    }

    updateProductPrice(productId: number, newPrice: number): boolean {
        console.log(`Product ${productId} price updated to $${newPrice}`);
        return true;
    }

    updateProductStock(productId: number, newStock: number): boolean {
        console.log(`Product ${productId} stock updated to ${newStock} units`);
        return true;
    }
}

class ProductService2 {
    private updater: ProductUpdater;

    constructor(updater: ProductUpdater) {
        this.updater = updater;
    }

    updateProductName(productId: number, newName: string): boolean {
        return this.updater.updateProductName(productId, newName);
    }

    updateProductPrice(productId: number, newPrice: number): boolean {
        return this.updater.updateProductPrice(productId, newPrice);
    }

    updateProductStock(productId: number, newStock: number): boolean {
        return this.updater.updateProductStock(productId, newStock);
    }
}
