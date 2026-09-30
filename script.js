console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const beats = document.querySelectorAll(".beat");
  const anchor = document.querySelector(".anchor");
  const anchorLines = document.querySelectorAll(".anchor-line");

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
const driftPause = 1800;
const driftDuration = 2800;

// Beat 3 finishes drifting at:
const crownFinishTime =
  1200 + (beats.length - 1) * (driftPause + driftDuration) + driftPause + driftDuration + 300;

// Diamond expands
setTimeout(() => {
  diamond.classList.add("expand");
}, crownFinishTime);

// Anchor appears after diamond expansion; reveal each sentence in sequence.
setTimeout(() => {
  anchor.classList.add("visible");
  anchorLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("visible");
    }, index * 1300);
  });
}, crownFinishTime + 1600);
});