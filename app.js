// DOM Elements
const buttonRight = document.getElementById("arrow-right");
const buttonLeft = document.getElementById("arrow-left");
const projects = document.querySelector(".projects__container");
const workExperienceContainer = document.querySelector(
  ".work-experience__cards"
);
const workExperienceCards = document.querySelectorAll(".work-experience__card");
const technicalkillsContainer = document.querySelector(
  ".technical-skills__container"
);
const technicalkillsCards = document.querySelectorAll(
  ".technical-skills__card"
);

// Functions
// Toggle expanding work experience cards
function toggleExpand() {
  this.classList.toggle("work-experience__card_expanded");
  // Get text inside of work experience card
  let content = this.children[1];
  // Toggle text inside of work experience card
  content.style.display === "block"
    ? (content.style.display = "none")
    : (content.style.display = "block");
}
// Check if element is visible. From https://stackoverflow.com/a/22480938
function isScrolledIntoView(el) {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;

  // Only completely visible elements return true:
  // let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
// Skill card fade in for scroll event listener
function workExperienceFadeIn() {
  if (isScrolledIntoView(workExperienceContainer)) {
    // workExperienceContainer.classList.add("fade-in");
    for (let i = 0; i < workExperienceCards.length; i++) {
      if (isScrolledIntoView(workExperienceCards[i])) {
        setTimeout(() => {
          workExperienceCards[i].style.opacity = "1";
        }, 1000 * i);
      }
    }
  }
}
function skillCardFadeIn() {
  if (isScrolledIntoView(technicalkillsContainer)) {
    // technicalkillsContainer.classList.add("fade-in");
    for (let i = 0; i < technicalkillsCards.length; i++) {
      if (isScrolledIntoView(technicalkillsCards[i])) {
        setTimeout(() => {
          technicalkillsCards[i].style.opacity = "1";
        }, 1000 * i);
      }
    }
  }
}
// Event Listeners
// Loops through work experience cards to toggle open/closed css classes
for (let i = 0, n = workExperienceCards.length; i < n; ++i) {
  workExperienceCards[i].addEventListener("click", toggleExpand);
}
// Fade skill cards into view when visible
document.addEventListener("scroll", skillCardFadeIn, {
  passive: true,
});
// Fade work experience cards into view when visible
document.addEventListener("scroll", workExperienceFadeIn, {
  passive: true,
});
// Project Navigation Arrows
buttonRight.onclick = () => (projects.scrollLeft += 966);
buttonLeft.onclick = () => (projects.scrollLeft -= 966);
