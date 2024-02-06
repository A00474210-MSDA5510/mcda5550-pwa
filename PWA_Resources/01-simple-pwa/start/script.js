/**
 * This code animates the components when app first loads.
 * The function animate() adds animation classes ("animate-in") to elements with a staggered delay.
 */

var title = document.querySelector(".title");
var courseElements = document.querySelectorAll(".course");

function animate() {
  title.classList.remove("animate-in");
  courseElements.forEach((el) => el.classList.remove("animate-in"));

  setTimeout(() => title.classList.add("animate-in"), 1000);

  courseElements.forEach((el, index) => {
    setTimeout(() => el.classList.add("animate-in"), 1500 + index * 500);
  });
}

animate();
