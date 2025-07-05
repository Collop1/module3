function printFibonacci(limit) {
    let a = 0, b = 1;
    let count = 0; // Counter to track how many numbers have been printed
    console.log(a); // Print first number (0) immediately
    
    const intervalId = setInterval(() => {
        if (count >= limit) {
            clearInterval(intervalId); // Stop the interval when limit is reached
            return;
        }

        // Calculate next Fibonacci number
        const next = a + b;
        a = b;
        b = next;
        
        console.log(a); // Print the next number in sequence
        count++;

    }, 1000);
    
    return intervalId;
}

printFibonacci(10);


function printFibonacciTimeouts() {
    let a = 0, b = 1;
    console.log(a); // Print first number (0) immediately
    
    const timeoutId = setTimeout(function nextFibonacci() {
        // Calculate next Fibonacci number
        const next = a + b;
        a = b;
        b = next;
        
        console.log(a); // Print the next number in sequence
        
        // Schedule the next call
        setTimeout(nextFibonacci, 1000);
    }, 1000);
    
    return timeoutId;
}

printFibonacciTimeouts(); // Prints indefinitely until stopped