// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

import fetch from "node-fetch";

// async function fetchDataWithTimeout(apiUrl, timeout) {
//   const fetchPromise = fetch(apiUrl);
//   const timeoutPromise = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Request timed out"));
//     }, timeout);
//   });

//   try {
//     const response = await Promise.race([fetchPromise, timeoutPromise]);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// }

// const apiUrl = "https://www.boredapi.com/api/activity";
// // const timeout = 800; // also try this
// const timeout = 2000;

// fetchDataWithTimeout(apiUrl, timeout)
//   .then((data) => {
//     console.log("Fetched Data:", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function fetchDataWithTimeout(apiUrl, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(apiUrl, { signal });
    clearTimeout(timeoutId);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request timed out:", error);
    } else {
      console.error("An error occurred:", error);
    }
    throw error;
  }
}

const apiUrl = "https://www.boredapi.com/api/activity";
// const timeout = 800; // also try this
const timeout = 2000;

fetchDataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.log(error);
  });
