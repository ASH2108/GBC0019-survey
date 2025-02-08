"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const body = document.body;

const MAX_IMAGES = 5; // Number of times "No" can be clicked before it runs
let noCount = 0;
let play = true;
let isRunningAway = false;

// Handle "Yes" click
yesButton.addEventListener("click", function () {
  titleElement.innerHTML = "Yayyy!! Hehehehe I love you so much bebiii <3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  startFlashyRainbowEffect(); // 🔥 Flashy background effect
});

// Handle "No" click
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;

    if (noCount >= MAX_IMAGES) {
      // Refresh the page when the last "No" is clicked
      location.reload();
    } else {
      const imageIndex = Math.min(noCount, MAX_IMAGES);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
    }
  }
});

// Make the "No" button move away from the cursor
function moveNoButton(event) {
  const x = event.clientX;
  const y = event.clientY;
  
  const offsetX = Math.random() * 200 - 100; // Random movement
  const offsetY = Math.random() * 200 - 100;

  noButton.style.left = `${x + offsetX}px`;
  noButton.style.top = `${y + offsetY}px`;
}

// Change the cat image
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

// Resize "Yes" button each time "No" is clicked
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  yesButton.style.fontSize = `${fontSize * 1.6}px`;
}

// Change "No" button text dynamically
function updateNoButtonText() {
  const messages = [
    "No dowan",
    "Are you sure shayanggg?",
    "Bebiii pleaseee",
    "DON'T DO THIS TO ME",
    "You're breaking my heart :(",
    "I'm gonna cri (proceeds to cry like banana cat)",
  ];
  noButton.innerHTML = messages[Math.min(noCount, messages.length - 1)];
}

// 🔥 FLASHY Rainbow Background Effect
function startFlashyRainbowEffect() {
  setInterval(() => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    body.style.backgroundColor = randomColor;
  }, 500); // Changes color every 100ms (fast flash)
}
