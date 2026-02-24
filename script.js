//Get all needed DOM elements
const form = document.getElementById("checkInForm");

const nameInput = document.getElementById("attendeeName");

const teamSelect = document.getElementById("teamSelect");

//Track attendees
let count = 0;

const maxCount = 50;

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

  //Reset form
  form.reset();
});
