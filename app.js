const buttonRight = document.getElementById('arrow-right');
const buttonLeft = document.getElementById('arrow-left');
const workExperienceCard = document.querySelectorAll('.work-experience__card');
// Navigation arrows for projects section
buttonRight.onclick = () => document.getElementById('projects-container').scrollLeft += 950;
buttonLeft.onclick = () => document.getElementById('projects-container').scrollLeft -= 950;
// Work Experience Card expanding function
console.log(workExperienceCard.length); 