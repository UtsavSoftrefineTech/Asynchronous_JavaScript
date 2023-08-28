// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 1");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 2");
      resolve();
    }, 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 3");
      resolve();
    }, 800);
  });
}

// Function to perform async operations in sequence
async function performAsyncOperations() {
  console.log("Starting async operations...");

  await asyncOperation1();
  await asyncOperation2();
  await asyncOperation3();

  console.log("All async operations completed.");
}

performAsyncOperations();
