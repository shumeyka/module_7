const arr = [1, 2, 7, 4, 5, 2, 1]
const set = new Set(arr)

const filteredNumbers = Array.from(set).sort((a, b) => a - b)
console.log(filteredNumbers)
