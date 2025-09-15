const { countdown } = require("../index.js");

(async () => {
  console.log("👉 Demo: Countdown");
  await countdown(3);
  await countdown(5, { style: "sparkle" });
  await countdown(10, { fps: 60, style: "animeFace" });
})();
