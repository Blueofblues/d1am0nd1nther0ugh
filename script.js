console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const beats = document.querySelectorAll(".beat");
  const anchor = document.querySelector(".anchor");

  // Step 1: Diamond fade-in
  setTimeout(() => {
    diamond.classList.add("visible");
  }, 300);

  // Step 2: Reveal beats one-by-one with a pause before drifting
beats.forEach((beat, index) => {
  const revealDelay = 1200 + index * 900;   // keep your reveal timing EXACTLY the same
  const driftDelay = revealDelay + 1800;    // add a pause before drifting

  setTimeout(() => {
    beat.classList.add("visible");
  }, revealDelay);

  setTimeout(() => {
    beat.classList.add(`drift${index + 1}`);
  }, driftDelay);
});

      // After reveal → drift upward into crown
      setTimeout(() => {
        beat.classList.add(`drift${index + 1}`);
      }, 1400);

    }, 1200 + index * 900);
  });

  // Step 3: Crown finishes → THEN diamond expands → THEN anchor appears
  const totalRevealTime = 1200 + beats.length * 900;
  const crownFinishTime = totalRevealTime + 1400 + 2800; // drift3 duration

  // ⭐ NEW: Diamond expands FIRST
  setTimeout(() => {
    diamond.classList.add("expand");
  }, crownFinishTime);

  // ⭐ Anchor appears AFTER diamond expansion finishes
  setTimeout(() => {
    anchor.classList.add("visible");
  }, crownFinishTime + 1600); // matches diamondExpand duration
});
