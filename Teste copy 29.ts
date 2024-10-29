class SessionManager {
    startSession(userId: number): string {
        return `Session started for user ${userId}`;
    }

    endSession(userId: number): string {
        return `Session ended for user ${userId}`;
    }

    getSessionStatus(userId: number): string {
        return `Session active for user ${userId}`;
    }
}

class SessionService {
    private manager: SessionManager;

    constructor(manager: SessionManager) {
        this.manager = manager;
    }

    startSession(userId: number): string {
        return this.manager.startSession(userId);
    }

    endSession(userId: number): string {
        return this.manager.endSession(userId);
    }

    getSessionStatus(userId: number): string {
        return this.manager.getSessionStatus(userId);
    }
}
