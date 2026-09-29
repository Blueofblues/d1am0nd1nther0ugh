console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const beats = document.querySelectorAll(".beat");
  const anchor = document.querySelector(".anchor");

  // Step 1: Diamond fade-in
  setTimeout(() => {
    beat.classList.add("drift");
  }, 1400);

  // Step 2: Each beat reveals → then drifts upward
  beats.forEach((beat, index) => {
    // Reveal
    setTimeout(() => {
      beat.classList.add("visible");

      // Drift upward through the diamond
      setTimeout(() => {
        beat.classList.add("drift");
      }, 900);

    }, 1200 + index * 900); 
  });

  // Step 3: Anchor appears last
  setTimeout(() => {
    anchor.classList.add("visible");
  }, 1200 + beats.length * 900 + 600);
});
