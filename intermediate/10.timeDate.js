const today = new Date();
const totalMinutes = today.getHours() * 60 + today.getMinutes();
const totalSeconds = totalMinutes * 60 + today.getSeconds();

console.log('Current time is ' + today.toLocaleTimeString());

console.log(today.getHours() + ' hours have passed so far today');
console.log(totalMinutes + ' minutes have passed so far today');
console.log(totalSeconds + ' seconds have passed so far today');

// Age calculator
function getAccurateAge(year, month, day) {
    const birthDate = new Date(year, month - 1, day); // month is 0-indexed in JavaScript so we subtract 1

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Handle negative days (when birth day is later in the month than current day)
    if (days < 0) {
        // Decrement the month count since we're borrowing days from the previous month
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    // Handle negative months (when birth month is later in the year than current month)
    if (months < 0) {
        // Decrement the year count since we're borrowing months from the previous year
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
}

console.log(`I am ${getAccurateAge(1995, 4, 15)} old`);


function daysInBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

console.log(`Days between 2023-01-01 and 2023-12-31: ${daysInBetween(new Date(2023, 0, 1), new Date(2023, 11, 31))}`);