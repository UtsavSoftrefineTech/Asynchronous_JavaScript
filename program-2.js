// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

import fetch from "node-fetch";

function makeHttpGetRequest(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

const apiUrl = "https://api.agify.io?name=utsav";
makeHttpGetRequest(apiUrl)
  .then((responseData) => {
    console.log("Response data:", responseData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
