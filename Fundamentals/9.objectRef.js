let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports]; // Creates a shallow copy of the teamSports array
moreSports.push('Rugby', 'Football', 'Basketball'); // Adds to the end of the array
moreSports.unshift('Baseball', 'Softball'); // Adds to the beginning of the array

let dog2 = 'Rex';
dog2 = 'Spot'; //Reassigns the variable

let cat2 = {...cat1} // Creates a shallow copy of the cat1 object
cat2.name = 'Mittens'; // Reassigns the property of the object


console.log('Team sports: ', teamSports);
console.log('First Dog: ', dog1);
console.log('Second Dog: ', dog2);
console.log('First cat: ', cat1);
console.log('Second cat: ', cat2);
console.log('More sports: ', moreSports);