class LogHandler {
    logInfo(message: string): void {
        console.log(`INFO: ${message}`);
    }

    logWarning(message: string): void {
        console.log(`WARNING: ${message}`);
    }

    logError(message: string): void {
        console.error(`ERROR: ${message}`);
    }
}

class LogService {
    private handler: LogHandler;

    constructor(handler: LogHandler) {
        this.handler = handler;
    }

    logInfo(message: string): void {
        this.handler.logInfo(message);
    }

    logWarning(message: string): void {
        this.handler.logWarning(message);
    }

    logError(message: string): void {
        this.handler.logError(message);
    }
}
