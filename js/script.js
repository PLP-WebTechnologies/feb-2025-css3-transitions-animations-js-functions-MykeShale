// Select the button, image, and status elements
const button = document.getElementById('animateButton');
const image = document.getElementById('animateImage');
const status = document.getElementById('status');

// Function to save user preference to localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve user preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Function to handle button click and trigger animation
function handleButtonClick() {
  // Add animation class to the button
  button.classList.add('animate');

  // Update status text
  status.textContent = 'Button animation triggered!';

  // Save the animation status to localStorage
  savePreference('buttonAnimationStatus', 'triggered');
}

// Function to handle image click and trigger animation
function handleImageClick() {
  // Add animation class to the image
  image.classList.add('animate');

  // Update status text
  status.textContent = 'Image animation triggered!';

  // Save the animation status to localStorage
  savePreference('imageAnimationStatus', 'triggered');
}

// Function to handle animation end and clean up for button
function handleButtonAnimationEnd() {
  // Remove the animation class after the animation ends
  button.classList.remove('animate');
}

// Function to handle animation end and clean up for image
function handleImageAnimationEnd() {
  // Remove the animation class after the animation ends
  image.classList.remove('animate');
}

// Add event listeners for button
button.addEventListener('click', handleButtonClick);
button.addEventListener('animationend', handleButtonAnimationEnd);

// Add event listeners for image
image.addEventListener('click', handleImageClick);
image.addEventListener('animationend', handleImageAnimationEnd);

// On page load, check localStorage for animation status
window.addEventListener('load', () => {
  const buttonAnimationStatus = getPreference('buttonAnimationStatus');
  const imageAnimationStatus = getPreference('imageAnimationStatus');

  if (buttonAnimationStatus === 'triggered' && imageAnimationStatus === 'triggered') {
    status.textContent = 'Both animations were triggered previously!';
  } else if (buttonAnimationStatus === 'triggered') {
    status.textContent = 'Button animation was triggered previously!';
  } else if (imageAnimationStatus === 'triggered') {
    status.textContent = 'Image animation was triggered previously!';
  } else {
    status.textContent = 'No animations triggered yet.';
  }
});