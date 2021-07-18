const buttonRight = document.getElementById('arrow-right');
const buttonLeft = document.getElementById('arrow-left');

buttonRight.onclick = function () {
  document.getElementById('projects-container').scrollLeft += 950;
};
buttonLeft.onclick = function () {
  document.getElementById('projects-container').scrollLeft -= 950;
};