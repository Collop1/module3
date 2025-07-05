const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}
const timer1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // 4
const timer2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // 3
const timer3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); // 2 as 0 still queues it
delayMsg('#4: Not delayed at all'); // 1
const timer5 = setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms'); // 5

clearTimeout(timer5);