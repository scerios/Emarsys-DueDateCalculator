import { Calculator } from './app/Calculator';

(function () {
    let date = new Date(2021, 1, 22, 16, 12);
    let calculator = new Calculator(date, 6);

    calculator.CalculateDueDate();
})();