class UserRepository {
    addUser(name: string): void {
        console.log(`User ${name} added`);
    }
}

class UserService {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    addUser(name: string): void {
        this.repository.addUser(name);
    }
}
