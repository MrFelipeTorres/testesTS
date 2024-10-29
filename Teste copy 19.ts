class AuthService {
    authenticate(user: string, password: string): boolean {
        return user === "admin" && password === "123";
    }
}

class LoginService {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    authenticate(user: string, password: string): boolean {
        return this.authService.authenticate(user, password);
    }
}
