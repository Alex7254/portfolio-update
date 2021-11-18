// DOM Elements
const buttonRight = document.getElementById("arrow-right");
const buttonLeft = document.getElementById("arrow-left");
const workExperienceCard = document.querySelectorAll(".work-experience__card");
const projects = document.querySelector(".projects__container");
const technicalkills = document.querySelector(".technical-skills__container");
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
  // var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
// Skill card fade in for scroll event listener
function skillCardFadeIn() {
  if (isScrolledIntoView(technicalkills)) {
    technicalkillsCards.forEach((skillCard) =>
      skillCard.classList.add("fade-in")
    );
  }
}

// Event Listeners
// Loops through work experience cards to toggle open/closed css classes
for (let i = 0, n = workExperienceCard.length; i < n; ++i) {
  workExperienceCard[i].addEventListener("click", toggleExpand);
}
// Fade skill cards into view when visible
document.addEventListener("scroll", skillCardFadeIn, {
  passive: true,
});
// Fade work experience cards into view when visible
// document.addEventListener("scroll", workExperienceFadeIn, {
//   passive: true,
// });
// Project Navigation Arrows
buttonRight.onclick = () => (projects.scrollLeft += 966);
buttonLeft.onclick = () => (projects.scrollLeft -= 966);
