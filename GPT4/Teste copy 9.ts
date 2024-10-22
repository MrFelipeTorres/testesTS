class DateHelper {
    getCurrentDate(): string {
      return new Date().toISOString();
    }
  }
  
  class Scheduler {
    scheduleEvent(): string {
      const dateHelper = new DateHelper();
      return `Event scheduled at ${dateHelper.getCurrentDate()}`;
    }
  }
  