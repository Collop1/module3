const today = new Date();
const totalMinutes = today.getHours() * 60 + today.getMinutes();
const totalSeconds = totalMinutes * 60 + today.getSeconds();

console.log('Current time is ' + today.toLocaleTimeString());

console.log(today.getHours() + ' hours have passed so far today');
console.log(totalMinutes + ' minutes have passed so far today');
console.log(totalSeconds + ' seconds have passed so far today');

// Age calculator
function getAccurateAge(year, month, day) {
    const birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        // Get days in previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
}

console.log(`I am ${getAccurateAge(1995, 8, 23)} old`);


function daysInBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

console.log(`Days between 2023-01-01 and 2023-12-31: ${daysInBetween(new Date(2023, 0, 1), new Date(2023, 11, 31))}`);