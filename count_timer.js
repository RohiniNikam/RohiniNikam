// Set the end date of the countdown timer
const endDate = new Date('2023-10-26T12:00:00.000Z');

// Start the countdown timer
function startCountdown() {
  // Get the current date and time
  const now = new Date();

  // Calculate the time remaining until the end date
  const timeRemaining = endDate - now;

  // Convert the time remaining to days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Set a timeout to call the startCountdown function again after 1 second
  setTimeout(startCountdown, 1000);
}

// Start the countdown timer on page load
startCountdown();
