// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

import fetch from "node-fetch";

async function fetchDataFromApis(apiUrls) {
  try {
    const promises = apiUrls.map(async (apiUrl) => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const apiUrls = [
  "https://www.boredapi.com/api/activity",
  "https://catfact.ninja/fact",
  "https://api.agify.io?name=utsav",
];

fetchDataFromApis(apiUrls)
  .then((combinedResult) => {
    console.log("Combined Result:", combinedResult);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
