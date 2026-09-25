console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const reveals = document.querySelectorAll(".reveal");

  // Diamond fade-in first
  setTimeout(() => {
    diamond.classList.add("visible");
  }, 300);

  // Text stagger
  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 1500 * index + 1200); 
    // 1200ms pause after diamond
    // 1500ms spacing between each line
  });
});
