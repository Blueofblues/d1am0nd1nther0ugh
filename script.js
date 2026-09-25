console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 800 * index); // stagger each reveal
  });
});
