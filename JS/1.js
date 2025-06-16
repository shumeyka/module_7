const person = {
	name: 'Artyom',
	age: 17,
}

function printInfo() {
	console.log(`Name: ${this.name}, Age: ${this.age}`)
}

printInfo.call(person)
