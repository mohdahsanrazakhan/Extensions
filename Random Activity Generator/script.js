import activities from "./activities.js";

const activity = document.getElementById('activities');

const maxLength = activities.length;

// Random Index Generator 
function getIndex(maxLength) {
  return Math.floor(Math.random() * maxLength);
}

activity.innerHTML = activities[(getIndex(maxLength))];

