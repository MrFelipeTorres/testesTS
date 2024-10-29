class ProductRepository {
    getProductById(id: number): string {
        return "Product " + id;
    }
}

class ProductService {
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    getProductById(id: number): string {
        return this.repository.getProductById(id);
    }
}
