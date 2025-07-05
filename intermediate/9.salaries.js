let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};


function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

console.log(sumSalaries(salaries));


function topEarner(salaries) {
    let topName = "";
    let maxSalary = null;
    for (let name in salaries) {
        if (salaries[name] > maxSalary) {
            maxSalary = salaries[name];
            topName = name;
        }
    }
    return topName;
}

console.log(topEarner(salaries));