const colors = require("meo-forkcy-colors");
const { sleep } = require("meo-forkcy-utils");

/**
 * Displays an animated countdown in the terminal with customizable styles.
 *
 * @async
 * @function countdown
 * @param {number} sec - Number of seconds to count down.
 * @param {Object} [options={}] - Configuration options.
 * @param {number} [options.fps=30] - Frames per second for the animation speed.
 * @param {string} [options.style='spinner'] - Animation style. Available styles:
 *   - `"spinner"` → rotating line (| / - \)
 *   - `"dots"` → dot sequence
 *   - `"hearts"` → cycling heart emojis
 *   - `"animeFace"` → cute anime expressions
 *   - `"sparkle"` → sparkle symbols
 *
 * @returns {Promise<void>} Resolves when the countdown completes.
 *
 * @example
 * // Run a 5-second countdown with spinner animation
 * await countdown(5);
 *
 * @example
 * // Run a 10-second countdown with dots animation at 15 FPS
 * await countdown(10, { fps: 15, style: 'dots' });
 */
async function countdown(sec, { fps = 30, style = "spinner" } = {}) {
  const animations = {
    spinner: ["|", "/", "-", "\\"],
    dots: [".  ", ".. ", "...", " ..", "  .", "   "],
    hearts: ["💛", "💚", "💙", "💜", "🧡", "❤️"],
    animeFace: ["(≧◡≦)", "(≧◡≦)✌", "(≧▽≦)", "(*≧▽≦)", "(≧∀≦)", "(≧ω≦)"],
    sparkle: ["✦", "✧", "✨", "✧", "✦", " "],
  };

  const frames = animations[style] || animations.spinner;
  let frameIndex = 0;
  let remaining = sec;

  const interval = setInterval(() => {
    const frame = frames[frameIndex % frames.length];
    process.stdout.write(
      colors.gradient(`\r${frame} Waiting ${remaining}s before restart... `)
    );
    frameIndex++;
  }, 1000 / fps);

  while (remaining > 0) {
    await sleep(1);
    remaining--;
  }

  clearInterval(interval);
}

module.exports = { countdown };
