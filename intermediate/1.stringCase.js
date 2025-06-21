function ucFirstLetters(str) {
    return str
        .toLowerCase() // Converts the entire string to lowercase to ensure only the first letters are capitalised
        .split(/\s+/) // Splits the string into an array of words based on white space
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalises the first letter of each word
        .join(' '); // Joins the words back into a string
}

console.log(ucFirstLetters("Lorem IPSUM   dOlor sit amet,  consEctetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore   et dolore magna aliqua."))

// This uses regex to make the function more efficient
function capFirstLetters(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase()); // Uses a regular expression to find the first letter of each word and capitalises it
}

const updatedString = capFirstLetters("i love javascript and regex");
console.log(updatedString); // Output: "I Love Javascript And Regex"