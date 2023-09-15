function updateUTCTime() {
  const currentTime = new Date();
  const minutesTime = Math.round(currentTime.getTime() / 1000 / 60); // Convert milliseconds to minutes
  const elements = document.querySelectorAll(".time");
  
  // Iterate over elements with the class "time" and update their content
  elements.forEach((element) => {
    element.textContent = minutesTime;
  });
  
  console.log(currentTime); // Remove quotes around 'currentTime'
  
  // Set up a timer to update the time every minute
  setTimeout(updateUTCTime, 60000); // Update every 60,000 milliseconds (1 minute)
}

// Call the updateUTCTime function to initially display the time
updateUTCTime();

function updateUTCDate() {
  const currentTime = new Date();
  const elements = document.querySelectorAll(".release-date");

  // Iterate over elements with the class "release-date" and update their content
  elements.forEach((element) => {
    const releaseDate = new Date(element.getAttribute("data-release-date"));
    const utcReleaseDate = releaseDate.toUTCString();
    element.textContent = utcReleaseDate;
  });

  console.log(currentTime); // Remove quotes around 'currentTime'

  // Set up a timer to update the time every second
  setTimeout(updateUTCDate, 1000);
}

// Call the updateUTCTime function to initially display the time
updateUTCDate();

