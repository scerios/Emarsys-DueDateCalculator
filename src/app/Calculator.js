export class Calculator {
    dateTime;
    turnaround;
    issueDue = {};

    workDays = [1, 2, 3, 4, 5];
    workHours = [9, 10, 11, 12, 13, 14, 15, 16];

    constructor(dateTime, turnaround) {
        this.dateTime = dateTime;
        this.turnaround = turnaround;
        this.Setup();
    }

    Setup() {
        this.issueDue.day = this.dateTime.getDay();
        this.issueDue.hours = this.dateTime.getHours();
        this.issueDue.minutes = this.dateTime.getMinutes();
        this.issueDue.howManyDays = this.GetHowManyDays(this.turnaround);
        this.issueDue.howManyHours = this.GetHowManyHours(this.turnaround);
    }

    CalculateDueHour(issueDue) {
        for (let i = 0; i < issueDue.howManyHours; i++) {
            if (!this.workHours.includes(issueDue.hours + 1)) {
                issueDue.hours = 9;
                issueDue.howManyDays++;
            } else {
                issueDue.hours += 1;
            }
        }

        return issueDue;
    }