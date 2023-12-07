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

      // Create and set the inner HTML for the profile
      profileDiv.innerHTML = `

                <div class="col-sm-6 col-lg-3 col-12 inner-profile-item">
                <div class="card  card-main">
                <img src="images/profiles/${profile.picture}" class="card-img-top" alt="...">
                <div class="card-body">
                <h2>${profile.firstName} ${profile.lastName}</h2>
                  <p>Age: ${profile.age}</p>
                  <p class="address">Address: ${profile.address.street}, ${profile.address.city}, ${profile.address.country}</p>
                  <a href="#" class="btn btn-primary">Invite To Travel</a>
                </div>
                </div>
              </div>

            `;

      // Append the profile div to the container
      profilesContainer.appendChild(profileDiv);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));

