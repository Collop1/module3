const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

// Add D, E, F phonebook entries
const phoneBookDEF = new Map([
  ['David', '0412555666'],
  ['Emma', '0433777888'],
  ['Frank', '0455999000']
]);

phoneBookABC.set('Caroline', '0476821493'); //update Caroline's phone number


// function printPhoneBook(contacts) {
//     contacts.forEach(({name, phone}) => {
//         console.log(`${name}: ${phone}`);
//     });
// }

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);


console.log('--- Merging phone books ---'); // Add separator for clarity

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);