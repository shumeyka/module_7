function calculate(a, b, operator) {
	switch (operator) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			if (b === 0) {
				throw new Error('нельзя делить на ноль')
			}
			return a / b
		default:
			return 'Такая операция недоступна'
	}
}

const arr = [2, 3, '+']
console.log(calculate.apply(null, arr))
