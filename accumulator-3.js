let array = ['JS','Python', 'php', 'C++', 'Haskell','C#', 'CSS', 'Ruby', 'Java', 'HTML']
let accumulator = []
for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
}
console.log(accumulator)