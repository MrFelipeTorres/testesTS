class TemperatureConverter {
    toCelsius(fahrenheit: number): number {
      return (fahrenheit - 32) * 5 / 9;
    }
  }
  
  class Weather {
    temperatureFahrenheit: number;
  
    constructor(temp: number) {
      this.temperatureFahrenheit = temp;
    }
  
    getTemperatureInCelsius(): number {
      const converter = new TemperatureConverter();
      return converter.toCelsius(this.temperatureFahrenheit);
    }
  }
  