class Formatter {
  formatText(text: string): string {
    return text.trim().toUpperCase();
  }
}

class Report1 {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getFormattedText(): string {
    const formatter = new Formatter();
    return formatter.formatText(this.text);
  }
}
