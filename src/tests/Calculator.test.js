import { Calculator } from '../app/Calculator';

const date = new Date(2021, 1, 22, 16, 12);
const calculator = new Calculator(date, 6);

test('CalculateDueHour issue hours should be 14', () => {
	expect(calculator.CalculateDueHour(calculator.issueDue)).toEqual({
		day: 1,
		hours: 14,
		minutes: 12,
		howManyHours: 6,
		howManyDays: 1
	});
});