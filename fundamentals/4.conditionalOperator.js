let a = 2, b = 3; 
let result = `${a} + ${b} is `;  

// This doesn't need += cause I'm using calc
const calc = (a + b < 10) ? result + 'less than 10' : result + 'greater than 10';

console.log(calc); // "2 + 3 is less than 10"

// This needs += because I'm using result
if (a + b < 10) {   
result + 'less than 10'; 
} else {   
result + 'greater than 10'; 
} 

console.log(result); // "2 + 3 is "