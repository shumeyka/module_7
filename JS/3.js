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

const users = [
	{
		name: 'Артём',
		age: 18,
	},
	{
		name: 'Егор',
		age: 17,
	},
	{
		name: 'Лёша',
		age: 21,
	},
]

const usersAge = users.filter(user => {
	return user.age >= 18
})

console.log(usersAge)

const usersName = users.map(user => {
	return user.name
})

console.log(usersName)
