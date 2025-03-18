// Grab the booking choice dropdown
const bookingChoice = document.getElementById('bookingChoice');

// Grab containers for date, slot, and time inputs
const dateContainer = document.getElementById('dateContainer');
const slotContainer = document.getElementById('slotContainer');
const timeContainer = document.getElementById('timeContainer');

// Event listener to manage the form based on booking choice
bookingChoice.addEventListener('change', function() {
  const selectedValue = bookingChoice.value;

  // Reset hidden states for all containers
  dateContainer.style.display = 'block';
  slotContainer.classList.add('hidden');
  timeContainer.classList.add('hidden');

  // Show and hide based on booking choice
  if (selectedValue === 'halfDay') {
    slotContainer.classList.remove('hidden');
  } else if (selectedValue === 'hourly') {
    timeContainer.classList.remove('hidden');
  }
});
