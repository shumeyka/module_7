const person = {
	firstName: 'Lena',
	lastName: 'Dr',
}

function setFullName(fullName) {
	this.fullName = fullName
}

const setPersonFullName = setFullName.bind(person)
setPersonFullName('John Smith')

console.log(person.fullName)
console.log(person)
