console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const beats = document.querySelectorAll(".beat");
  const anchor = document.querySelector(".anchor");

  // Step 1: Diamond fade-in
  setTimeout(() => {
    diamond.classList.add("visible");
  }, 300);

 // Step 2: Reveal beats one-by-one with proper spacing
beats.forEach((beat, index) => {
  const baseReveal = 1200;
  const driftPause = 1800;     // time between reveal → drift
  const driftDuration = 2800;  // how long the drift animation lasts

  const revealDelay = baseReveal + index * (driftPause + driftDuration);
  const driftDelay = revealDelay + driftPause;

  setTimeout(() => {
    beat.classList.add("visible");
  }, revealDelay);

  setTimeout(() => {
    beat.classList.add(`drift${index + 1}`);
  }, driftDelay);
});

  // Step 3: Crown finishes → THEN diamond expands → THEN anchor appears
  const totalRevealTime = 1200 + beats.length * 900;
  const crownFinishTime = totalRevealTime + 1800 + 2800; // updated drift timing

  // Diamond expands
  setTimeout(() => {
    diamond.classList.add("expand");
  }, crownFinishTime);

  // Anchor appears AFTER diamond expansion finishes
  setTimeout(() => {
    anchor.classList.add("visible");
  }, crownFinishTime + 1600);
});
