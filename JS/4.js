const person = {
	firstName: 'Lena',
	lastName: 'Dr',
}

function setFullName(name) {
	this.fullName = name
}

const setPersonFullName = setFullName.bind(person)
setPersonFullName('John Smith')

console.log(person.fullName)
console.log(person)
