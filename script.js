const quotes = {
  Science: [
    "Science is the acceptance of what works and the rejection of what does not. That needs more courage than we might think.",
    "The science of today is the technology of tomorrow.",
    "Science is a way of thinking much more than it is a body of knowledge.",
  ],
  Motivational: [
    "Don't watch the clock; do what it does. Keep going.",
    "The harder the conflict, the greater the triumph.",
    "Your time is limited, don't waste it living someone else's life.",
  ],
};

const darkmodeSwitch = document.getElementById("dark-mode-switch");
const categorySelector = document.getElementById("categorySelect");
const quote = document.getElementById("quoteSentence");
const fontSize = document.getElementById("font-size-input");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const randomButton = document.getElementById("randBtn");

let quoteIndex;
let currentCategory;

function quoteContentUpdater() {
  quote.textContent = quotes[currentCategory][quoteIndex];
}

categorySelector.addEventListener("change", () => {
  currentCategory = categorySelector.value;
  quoteIndex = 0;
  quoteContentUpdater();
});

nextButton.addEventListener("click", () => {
  if (quoteIndex < quotes[currentCategory].length - 1) {
    quoteIndex++;
    quoteContentUpdater();
  } else {
    window.alert("maximum quote limit reached ");
  }
});

prevButton.addEventListener("click", () => {
  if (quoteIndex > 0) {
    quoteIndex--;
    quoteContentUpdater();
  }
});

randomButton.addEventListener("click", () => {
  quoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  quoteContentUpdater();
});

darkmodeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkmodeSwitch.checked);
});

fontSize.addEventListener("input", () => {
  quote.style.fontSize = `${fontSize.value}px`;
});
