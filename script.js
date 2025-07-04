
const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

// Typewriter effect
const typewriter = document.getElementById("typewriter");
const phrases = ["Ask anything...", "Powered by Gemini AI", "24/7 AI Assistant"];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeEffect() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  typewriter.textContent = phrase.substring(0, currentChar);

  if (!isDeleting && currentChar === phrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();
