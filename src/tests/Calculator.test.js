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