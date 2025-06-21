// Function declaration
function getGreeting(name) {
    return 'Hello ' + name + '!';
}

console.log(getGreeting('Alice')); // Hello Alice!

// Function expression
const getFarewell = function(name) {
    return 'Goodbye ' + name + '!';
}

console.log(getFarewell('Bob')); // Goodbye Bob!

// Arrow function
const getWelcome = (name) => {
    return 'Welcome ' + name + '!';
}

console.log(getWelcome('Charlie')); // Welcome Charlie!