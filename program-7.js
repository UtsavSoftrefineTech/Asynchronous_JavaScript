// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeatAtInterval(func, interval) {
  const intervalId = setInterval(func, interval);
  return intervalId;
}

function printMessage() {
  console.log("Repeated message!");
}
const repeatInterval = 2000;
const intervalId = repeatAtInterval(printMessage, repeatInterval);
