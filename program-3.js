//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

import fetch from "node-fetch";

function downloadUrlsParallel(urls) {
  const promises = urls.map((url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${url}: ${response.status} ${response.statusText}`
          );
        }
        return response.text();
      })
      .then((content) => {
        return { url, content };
      })
      .catch((error) => {
        return { url, error: error.message };
      });
  });

  return Promise.all(promises);
}

const urls = [
  "https://www.boredapi.com/api/activity",
  "https://catfact.ninja/fact",
  "https://api.agify.io?name=utsav",
];

downloadUrlsParallel(urls)
  .then((results) => {
    results.forEach((result) => {
      if (result.error) {
        console.log(`Error downloading ${result.url}`);
      } else {
        console.log(`Downloaded ${result.url}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
