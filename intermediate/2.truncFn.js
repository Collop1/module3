function truncate(str, max) {
    if (str.length >= max) {
        return str.slice(0, max) + '...';
    }
    return str;
}

function truncateWords(str, max) { 
    return (str.length >= max) ? str.slice(0, max) + '...' : str; 
}


console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...
console.log(truncate("This text won't be truncated though", 50))

console.log(truncateWords('This text will be truncated if it is too long', 25)) // This text will be truncat...
console.log(truncateWords("This text won't be truncated though", 50))