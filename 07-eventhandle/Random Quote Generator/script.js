// Array of quotes
const quotes = [
  { q: "The best way to get started is to quit talking and begin doing.", auth: "ag" },
  { q: "Don't let yesterday take up too much of today.", auth: "ar" },
  { q: "It's not whether you get knocked down, it's whether you get up.", auth: "ass" },
  { q: "If you are working on something exciting, it will keep you motivated.", auth: "aa" },
  { q: "Success is not in what you have, but who you are.", auth: "ss" }
];

// DOM Elements
const quoteDisplay = document.querySelector("#quoteDisplay");
const generateBtn = document.querySelector("#generateBtn");

// Event Listener
// Global variable for index
let currentIndex = 0;

// Generate random quote
generateBtn.addEventListener("click", function () {
  currentIndex = Math.floor(Math.random() * quotes.length);
  showQuote(currentIndex);
});

// Function to display quote + next button
// Function to display quote
function showQuote(index) {
  quoteDisplay.innerHTML = `
        <q>${quotes[index].q}</q>
        <p>~ ${quotes[index].auth}</p>
        <p><button id="nextBtn">See Next</button></p>
      `;

  // Button select + overwrite previous listener (avoids stacking)
  const nextBtn = document.querySelector("#nextBtn");
  nextBtn.onclick = function () {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  };
}