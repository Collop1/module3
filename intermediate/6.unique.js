const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(arr) {
    return [...new Set(arr)]
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


const cars = ['Toyota', 'Honda', 'Ford', 'Toyota', 'BMW', 'Honda']
const gadgets = ['Smartphone', 'Tablet', 'Laptop', 'Smartphone', 'Smartwatch']

const uniqueCars = Array.from(new Set(cars));
const uniqueGadgets = Array.from(new Set(gadgets));

console.log(uniqueCars)
console.log(uniqueGadgets)