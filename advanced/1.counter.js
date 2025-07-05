function makeCounter(startFrom, increamentBy) {
    let currentCount = startFrom !== undefined ? startFrom : 0;
    return function() {
        currentCount += increamentBy !== undefined ? increamentBy : 1;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter(0, 5);
let counter2 = makeCounter(7);

counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2