class DistanceCalculator {
    calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
  }
  
  class Map1 {
    calculateTravelDistance(x1: number, y1: number, x2: number, y2: number): number {
      const calculator = new DistanceCalculator();
      return calculator.calculateDistance(x1, y1, x2, y2);
    }
  }
  