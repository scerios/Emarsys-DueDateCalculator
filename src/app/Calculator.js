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

    CalculateDueDate() {
        this.issueDue = this.CalculateDueHour(this.issueDue);
        this.issueDue = this.CalculateDueDay(this.issueDue);

        let turnaroundDate = this.GetSetDueDate(this.issueDue.hours, this.issueDue.minutes);
        let turnaroundDay = this.GetSetDueDay(this.issueDue.day);
        let meridiem = this.GetSetMeridiem(this.issueDue.hours);

        turnaroundDate = this.CorrectHoursByMeridiem(meridiem, turnaroundDate);

        console.log(`Issue is due by ${turnaroundDate.getHours()}:${turnaroundDate.getMinutes()}${meridiem} on ${turnaroundDay}.`);
    }

    GetHowManyDays(turnaround) {
        if (!Number.isInteger(turnaround) || turnaround < 0) {
            throw new Error("Invalid input number. Input must be an integer greater than or equal to 0.");
        }

        return parseInt(turnaround / 8);
    }

    GetHowManyHours(turnaround) {
        if (!Number.isInteger(turnaround) || turnaround < 0) {
            throw new Error("Invalid input number. Input must be an integer greater than or equal to 0.");
        }

        return turnaround % 8;
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

    CalculateDueDay(issueDue) {
        for (let i = 0; i < issueDue.howManyDays; i++) {
            if (!this.workDays.includes(issueDue.day + 1)) {
                issueDue.day = 1;
            } else {
                issueDue.day++;
            }
        }

        return issueDue;
    }

    GetSetDueDate(hours, minutes) {
        if (!Number.isInteger(hours) || hours < 0 || hours > 23) {
            throw new Error(`The hours you entered: ${hours} is invalid. Hours must be an integer greater than or equal to 0 and less than or equal to 23.`);
        }

        if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
            throw new Error(`The minutes you entered: ${minutes} is invalid. Minutes must be an integer greater than or equal to 0 and less than or equal to 59.`);
        }

        let turnaroundDate = new Date();
        turnaroundDate.setHours(hours);
        turnaroundDate.setMinutes(minutes);

        return turnaroundDate;
    }

    GetSetDueDay(issueDay) {
        if (issueDay < 1 || issueDay > 5) {
            throw new Error("Invalid input number. Input must be greater than 0 and less than 6.");
        }

        let turnaroundDay = "";

        switch (issueDay) {
            case 1:
                turnaroundDay = "Monday";
                break;

            case 2:
                turnaroundDay = "Tuesday";
                break;

            case 3:
                turnaroundDay = "Wednesday";
                break;

            case 4:
                turnaroundDay = "Thursday";
                break;

            case 5:
                turnaroundDay = "Friday";
                break;
        }

        return turnaroundDay;
    }

    GetSetMeridiem(hours) {
        if (!Number.isInteger(hours) || hours < 0 || hours > 23) {
            throw new Error("Invalid input hours. Hour must be an integer greater than or equal to 0 and less than or equal to 23.");
        }

        if (hours < 12) {
            return "AM";
        } else {
            return "PM";
        }
    }

    CorrectHoursByMeridiem(meridiem, turnaroundDate) {
        if (meridiem == "PM" && turnaroundDate.getHours() > 12) {
            turnaroundDate.setHours(turnaroundDate.getHours() - 12);
        }

        return turnaroundDate;
    }
}