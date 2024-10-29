class NotificationSender {
    sendEmail(email: string, message: string): void {
        console.log(`Email sent to ${email}: ${message}`);
    }
}

class NotificationService {
    private sender: NotificationSender;

    constructor(sender: NotificationSender) {
        this.sender = sender;
    }

    sendEmail(email: string, message: string): void {
        this.sender.sendEmail(email, message);
    }
}
