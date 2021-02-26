import { Calculator } from '../app/Calculator';

const date = new Date(2021, 1, 22, 16, 12);
const calculator = new Calculator(date, 6);

test('GetHowManyDays days should be 0', () => {
	expect(calculator.GetHowManyDays(6)).toBe(0);
});

test('GetHowManyHours hours should be 6', () => {
	expect(calculator.GetHowManyHours(6)).toBe(6);
});

test('CalculateDueHour issue hours should be 14', () => {
	expect(calculator.CalculateDueHour(calculator.issueDue)).toEqual({
		day: 1,
		hours: 14,
		minutes: 12,
		howManyHours: 6,
		howManyDays: 1
	});
});

test('CalculateDueDay issue day should be 2', () => {
	expect(calculator.CalculateDueDay(calculator.issueDue)).toEqual({
		day: 2,
		hours: 14,
		minutes: 12,
		howManyHours: 6,
		howManyDays: 1
	});
});

test('GetSetDueTime turnaround time should be 14:12', () => {
	expect(calculator.GetSetDueTime(14, 12)).toEqual({
		hours: 14,
		minutes: 12
	});
});

test('GetSetDueDay turnaround day should be TuesDay', () => {
	expect(calculator.GetSetDueDay(2)).toBe("Tuesday");
});

test('GetSetMeridiem meridiem should be PM', () => {
	expect(calculator.GetSetMeridiem(14)).toBe("PM");
});

test('CorrectHoursByMeridiem hours should be 2', () => {
	let turnaroundTime = {
		hours: 14,
		minutes: 12
	};
	expect(calculator.CorrectHoursByMeridiem("PM", turnaroundTime)).toEqual({
		hours: 2,
		minutes: 12
	});
});