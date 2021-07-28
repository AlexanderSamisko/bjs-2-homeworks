function solveEquation(a,b,c) {
	"use strict";
    let d = b**2-4*a*c;
    let xArray = [];
    let x = 0;
  	if (d === 0) {
        x = -b/(2*a);
        xArray.push(parseFloat(x.toFixed(1)));
    } else if (d > 0) {
        x = (-b + Math.sqrt(d))/(2*a);
        xArray.push(parseFloat(x.toFixed(1)));
        x = (-b - Math.sqrt(d))/(2*a);
        xArray.push(parseFloat(x.toFixed(1)));
    }
    return xArray;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	"use strict";
	let totalAmount;
	if (isNaN(percent)) {
		totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
	} else if (isNaN(contribution)) {
		totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
	} else if (isNaN(amount)) {
		totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
	} else {
	let creditBody =  amount - contribution;
	let currentDate = new Date();
	let period = monthDiff(currentDate, date) + 1;
	let monthlyPayment = creditBody * ((percent/(12*100)) + (percent/(12*100)) / (((1 + (percent/(12*100)))**period) - 1));
  	 totalAmount = parseFloat((period * monthlyPayment).toFixed(2));
  }
  return totalAmount;
}

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
