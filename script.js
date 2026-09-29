console.log("script.js is running");

document.addEventListener("DOMContentLoaded", () => {
  const diamond = document.querySelector(".diamond");
  const beats = document.querySelectorAll(".beat");
  const anchor = document.querySelector(".anchor");

  // Step 1: Diamond fade-in
  setTimeout(() => {
    diamond.classList.add("visible");
  }, 300);

  // Step 2: Reveal beats one-by-one
  beats.forEach((beat, index) => {
    setTimeout(() => {
      beat.classList.add("visible");

      // After reveal → drift upward into crown
      setTimeout(() => {
        beat.classList.add(`drift${index + 1}`);
      }, 1400);

    }, 1200 + index * 900);
  });

  // Step 3: Anchor appears AFTER crown is fully formed
  const totalRevealTime = 1200 + beats.length * 900;
  const crownFinishTime = totalRevealTime + 1400 + 2800; // drift3 duration

  setTimeout(() => {
    anchor.classList.add("visible");
  }, crownFinishTime);
});
