/**
 * This code below animates the components when app first loads.
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

/**
 * This code checks to see if the service worker API is available.
 * If yes, we register the service worker at /sw.js once the page is loaded.
 */

if ("serviceWorker" in navigator) {
  // checking if the browser supports service workers
  window.addEventListener("load", function () {
    // when app loads, fire callback
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
      function () {
        console.log("serviceWorker registration successful"); // registration was successful
      },
      function (err) {
        console.log("serviceWorker registration failed", err); // registration failed
      }
    );
  });
}
