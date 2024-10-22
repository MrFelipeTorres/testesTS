class UserValidator {
  isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}

class User {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  validateEmail(): boolean {
    const validator = new UserValidator();
    return validator.isValidEmail(this.email);
  }
}
