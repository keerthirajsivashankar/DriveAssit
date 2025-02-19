// Function to update date and time
function updateTime() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  document.getElementById("datetime").innerHTML = dateTime;
}

setInterval(updateTime, 1000);

// Function to get the user's location
function getMyLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // You can do something with the latitude and longitude here
          // For example, update the map to show the user's location
          const userLocation = new google.maps.LatLng(latitude, longitude);
          map.setCenter(userLocation); // Assuming 'map' is your Google Map instance
      });
  } else {
      alert('Geolocation is not supported by this browser.');
  }
}

// Get all buttons with the "buttons" class
const buttons = document.querySelectorAll(".buttons");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
      // Toggle the "active" class on the clicked button
      this.classList.toggle("active");
  });
});
// google map
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:80.2707, lng:13.0827}, // Default initial map coordinates (San Francisco)
      zoom: 12, // Set the initial zoom level
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  const request = {
      origin: 'San Francisco, CA', // Replace with your start location
      destination: 'Los Angeles, CA', // Replace with your destination
      travelMode: 'DRIVING', // Change to desired travel mode (DRIVING, WALKING, TRANSIT, etc.)
  };

  directionsService.route(request, function (result, status) {
      if (status === 'OK') {
          directionsDisplay.setDirections(result);
      }
  });
}

// Function to fetch weather data
function fetchWeatherData(location) {
  const apiKey = '6f481640f43cfc371b7df92913190350';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          // Extract the relevant weather information
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          // Update the weather information element
          const weatherInfoElement = document.getElementById('weather-info');
          weatherInfoElement.innerHTML = `
              <p>Temperature: ${temperature}°F</p>
              <p>Description: ${description}</p>
              <div class="weather">
              <i class="fa-solid fa-sun" style="color: #e5ebf6; paddind:5px; margin:spx"></i>
              <i class="fa-solid fa-cloud-rain" style="color: #e2e5e9;"></i>
              <i class="fa-solid fa-wind" style="color: #dcdfe4;"></i>
              <i class="fa-solid fa-snowflake" style="color: #e5e9f0;"></i>
              </div>

          `;
      })
      .catch((error) => {
          console.error('Error fetching weather data:', error);
      });
}

// Call the fetchWeatherData function with a default location (e.g., Chennai)
fetchWeatherData('Chennai');
// ... (your existing JavaScript code) ...
        // Get the file input element
        const fileInput = document.getElementById("imageInput");

        // Get the delete button element
        const deleteButton = document.getElementById("deleteButton");

        // Get the "Choose Image" label element
        const chooseButton = document.getElementById("chooseButton");

        // Get the uploaded image element
        const uploadedImage = document.getElementById("uploadedImage");

        // Function to delete the image
        function deleteImage() {
            // Clear the image data
            fileInput.value = "";

            // Show the file input again
            fileInput.style.display = "block";

            // Show the "Choose Image" label
            chooseButton.style.display = "block";

            // Hide the uploaded image
            uploadedImage.style.display = "none";

            // Hide the delete button
            deleteButton.style.display = "none";
        }

        // Function to handle file input change
        function handleFileInput() {
            // Check if a file was selected
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();

                // Display the selected image
                reader.onload = function (e) {
                    uploadedImage.src = e.target.result;
                    uploadedImage.style.display = "block";
                };

                reader.readAsDataURL(file);

                // Hide the file input
                fileInput.style.display = "none";

                // Hide the "Choose Image" label
                chooseButton.style.display = "none";

                // Show the delete button
                deleteButton.style.display = "block";
            }
        }

        // Add an event listener to the file input to handle changes
        fileInput.addEventListener("change", handleFileInput);

        // Trigger the file input click when the "Choose Image" label is clicked
        chooseButton.addEventListener("click", function () {
            fileInput.click();
        });

        // Trigger file input change initially
        handleFileInput();
        var i = 0;
        function move() {
          if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
        }
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }