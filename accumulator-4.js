let array = ['Askhab', 'Imram', 'Israil', 'Tamerlan', 'Movsar', 'Alvi', 'Ramzan', 'Magomed-Emi', 'Jabrail', 'Mansur']
let accumulator = []
for (let i = 0; i < array.length; i++) {
if (array[i][0] === 'A') {
accumulator.push(array[i])   
}
}
console.log(accumulator)