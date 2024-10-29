class Logger {
    logMessage(message: string): void {
        console.log(message);
    }
}

class LoggerService {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    logMessage(message: string): void {
        this.logger.logMessage(message);
    }
}
