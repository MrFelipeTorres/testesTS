class TaskScheduler {
    scheduleDaily(task: () => void): string {
        return `Task scheduled daily`;
    }

    scheduleWeekly(task: () => void): string {
        return `Task scheduled weekly`;
    }

    scheduleMonthly(task: () => void): string {
        return `Task scheduled monthly`;
    }
}

class ScheduleService {
    private scheduler: TaskScheduler;

    constructor(scheduler: TaskScheduler) {
        this.scheduler = scheduler;
    }

    scheduleDaily(task: () => void): string {
        return this.scheduler.scheduleDaily(task);
    }

    scheduleWeekly(task: () => void): string {
        return this.scheduler.scheduleWeekly(task);
    }

    scheduleMonthly(task: () => void): string {
        return this.scheduler.scheduleMonthly(task);
    }
}
