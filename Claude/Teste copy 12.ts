
class CalculatorHelper {
    addNumbers(a: number, b: number): number {
        return a + b;
    }
}   

class Calculator2 {
    private helper = new CalculatorHelper();
    
    calculate(a: number, b: number): number {
        return this.helper.addNumbers(a, b);
    }
}

class DateFormatter {
    formatDate(date: Date): string {
        return date.toLocaleDateString();
    }
}

class StringValidator {
    isEmpty(str: string): boolean {
        return str.trim().length === 0;
    }
}

class PriceCalculator2 {
    applyDiscount(price: number, discountPercent: number): number {
        return price * (1 - discountPercent / 100);
    }
}

class EmailValidator {
    isValid(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

class LoggerWrapper {
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

class TemperatureConverter2 {
    celsiusToFahrenheit(celsius: number): number {
        return (celsius * 9/5) + 32;
    }
}

class ArrayHelper {
    getLastElement<T>(arr: T[]): T | undefined {
        return arr[arr.length - 1];
    }
}

class PasswordValidator {
    isValidLength(password: string): boolean {
        return password.length >= 8;
    }
}

class TextFormatter {
    capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
