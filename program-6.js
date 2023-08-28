// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

import fetch from "node-fetch";

async function fetchDataWithRetries(apiUrl, maxRetries) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data (Retry ${retries + 1}):`, error);
      retries++;
    }
  }

  throw new Error(`Failed to fetch data after ${maxRetries} retries.`);
}

const apiUrl = "https://catfact.ninja/fact";
const maxRetries = 3;

fetchDataWithRetries(apiUrl, maxRetries)
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
