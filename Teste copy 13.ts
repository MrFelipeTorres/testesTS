class StringFormatter {
    capitalize(text: string): string {
        return text.toUpperCase();
    }
}

class TextService {
    private formatter: StringFormatter;

    constructor(formatter: StringFormatter) {
        this.formatter = formatter;
    }

    capitalize(text: string): string {
        return this.formatter.capitalize(text);
    }
}
