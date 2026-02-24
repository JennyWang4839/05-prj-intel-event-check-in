//Get all needed DOM elements
const form = document.getElementById("checkInForm");

const nameInput = document.getElementById("attendeeName");

const teamSelect = document.getElementById("teamSelect");

//Track attendees
let count = 0;

const maxCount = 50;

//Load saved data from local storage
window.addEventListener("load", function () {
  const savedCount = localStorage.getItem("totalAttendees");

  if (savedCount) {
    count = parseInt(savedCount);

    document.getElementById("attendeeCount").textContent = count;

    const percentage = Math.round((count / maxCount) * 100) + "%";

    document.getElementById("progressBar").style.width = percentage;
  }

  const savedWater = localStorage.getItem("waterCount");

  if (savedWater) {
    document.getElementById("waterCount").textContent = savedWater;
  }

  const savedZero = localStorage.getItem("zeroCount");

  if (savedZero) {
    document.getElementById("zeroCount").textContent = savedZero;
  }

  const savedPower = localStorage.getItem("powerCount");

  if (savedPower) {
    document.getElementById("powerCount").textContent = savedPower;
  }
});

//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = nameInput.value.trim();

  const team = teamSelect.value;

  const teamName = teamSelect.selectedOptions[0].text;

  console.log(`Name: ${name}, Team: ${teamName}`);

  //Increment count
  count++;

  console.log(`Total check-ins: ${count}`);

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";

  console.log(`Progress: ${percentage}`);

  //Update team counter
  const teamCounter = document.getElementById(team + "Count");

  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome message
  const welcomeMessage = document.getElementById("greeting");

  welcomeMessage.textContent = `🎉Welcome, ${name} from ${teamName}!`;

  welcomeMessage.style.display = "block";

  //Update total attendees
  const totalAttendees = document.getElementById("attendeeCount");

  totalAttendees.textContent = count;

  //Update progress bar
  const progressBar = document.getElementById("progressBar");

  progressBar.style.width = percentage;

  //Saves attendee data to local storage
  localStorage.setItem("totalAttendees", count);

  localStorage.setItem("zeroCount", document.
  getElementById("zeroCount").textContent);

  localStorage.setItem("waterCount", document.getElementById("waterCount").textContent);

  localStorage.setItem("powerCount", document.getElementById("powerCount").textContent);

  //Reset form
  form.reset();
});
