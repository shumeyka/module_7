const user1 = {
	name: 'Артём',
	age: 18,
}

const user2 = {
	name: 'Егор',
	age: 17,
}

const user3 = {
	name: 'Лёша',
	age: 21,
}

const users = [user1, user2, user3]

const usersAge = users.filter(num => {
	return num.age >= 18
})

console.log(usersAge)

const usersName = users.map(num => {
	return num.name
})

console.log(usersName)
