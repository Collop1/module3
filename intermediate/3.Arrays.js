let animals = ['tiger', 'giraffe']
animals.push('T-Rex', 'Lion')
animals.unshift('Zebra', 'Monkey')
animals.sort()

function replaceMiddleAnimal(arr, newAnimal) {
    const middleIndex = Math.floor(arr.length / 2);
    arr[middleIndex] = newAnimal;
}

replaceMiddleAnimal(animals, 'Antelope') // Replaces middle which is 'Monkey'

function findMatchingAnimals(beginsWith) {
    return animals.filter(
        animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
}

console.log(findMatchingAnimals('T')) // case insensitive search

console.log(animals)

console.log(animals[0])
console.log(animals[1])