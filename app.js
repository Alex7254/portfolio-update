const buttonRight = document.getElementById("arrow-right");
const buttonLeft = document.getElementById("arrow-left");
const workExperienceCard = document.querySelectorAll(".work-experience__card");
const projects = document.querySelector(".projects__container");

// Navigation arrows functions for projects section
buttonRight.onclick = () =>
  (document.getElementById("projects-container").scrollLeft += 966);
buttonLeft.onclick = () =>
  (document.getElementById("projects-container").scrollLeft -= 966);

// Work Experience Card expanding function
for (let i = 0, n = workExperienceCard.length; i < n; ++i) {
  workExperienceCard[i].addEventListener("click", function () {
    this.classList.toggle("work-experience__card_expanded");
    // Get text inside of work experience card
    var content = this.children[1];
    // Toggle text inside of work experience card
    content.style.display === "block"
      ? (content.style.display = "none")
      : (content.style.display = "block");
  });
}

// Function to check if element is visible from https://stackoverflow.com/a/22480938
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}