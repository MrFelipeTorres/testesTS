class Logger {
    logMessage(message: string): void {
      console.log(message);
    }
  }
  
  class App {
    start(): void {
      const logger = new Logger();
      logger.logMessage("App is starting...");
    }
  }
  