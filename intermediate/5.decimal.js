let twentyCents = 0.20 
let tenCents = 0.10 

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)  // 0.2 + 0.1 = 0.30000000000000004 


let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 

console.log(fixedTwenty + fixedTen) // toFixed returns a string so this gets concatenated: 0.200.10


function currencyOperation(float1, float2, operation, numDecimals) {
    let result;

    switch (operation) {
        case 'add':
            result = (float1 + float2).toFixed(numDecimals);
            break;
        case 'subtract':
            result = (float1 - float2).toFixed(numDecimals);
            break;
        case 'multiply':
            result = (float1 * float2).toFixed(numDecimals);
            break;
        case 'divide':
            if (float2 !== 0) {
                result = (float1 / float2).toFixed(numDecimals);
            } else {
                return 'Error: Division by zero';
            }
            break;
        default:
            return 'Error: Invalid operation';
    }

    return result; // Convert the string back to a float
}

console.log(currencyOperation(0.20, 0.10, 'add', 5)); // 0.30000
console.log(currencyOperation(0.20000, 0.100, 'subtract', 1)); // 0.1
console.log(currencyOperation(0.1, 0.3, 'multiply', 3)); // 0.030
console.log(currencyOperation(0.6, 0.2, 'divide', 2)); // 3.00

console.log(0.3 == currencyOperation(0.1, 0.2, 'add', 1)) // true 
console.log(0.30 == currencyOperation(0.5, 0.2, 'subtract', 2)) // true 
console.log(0.030 == currencyOperation(0.1, 0.3, 'multiply', 3)) // true 
console.log(3.000 == currencyOperation(0.6, 0.2, 'divide', 3)) // true 