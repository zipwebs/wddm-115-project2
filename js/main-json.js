const profilesContainer = document.getElementById("profilesContainer");
// Fetch the JSON file
fetch("json/dataset.json")
  .then((response) => response.json())
  .then((jsonData) => {
// Loop through the JSON data and create HTML elements
jsonData.forEach((profile) => {

// Create a div element for each profile
const profileDiv = document.createElement("div");
profileDiv.classList.add("profile");

  }

