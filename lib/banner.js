const colors = require("meo-forkcy-colors");

const socialRows = [
  ["💬 Telegram (Me)", "https://t.me/MeoMunDep"],
  [" 𝕏 Twitter - X", "https://x.com/MeoMeo0009"],
  ["📺 Discord", "https://discord.gg/5aHuaGdu"],
  ["📢 Telegram (Channel)", "https://t.me/keoairdropfreene"],
  ["🎵 TikTok", "https://www.tiktok.com/@meomundep"],
  ["📸 Instagram", "https://www.instagram.com/meom.undep/"],
  ["🎥 YouTube", "https://www.youtube.com/@keoairdropfreene"],
];

// Combining characters table (zero-width characters)
const combining = [
  [0x0300, 0x036f],
  [0x0483, 0x0486],
  [0x0488, 0x0489],
  [0x0591, 0x05bd],
  [0x05bf, 0x05bf],
  [0x05c1, 0x05c2],
  [0x05c4, 0x05c5],
  [0x05c7, 0x05c7],
  [0x0600, 0x0603],
  [0x0610, 0x0615],
  [0x064b, 0x065e],
  [0x0670, 0x0670],
  [0x06d6, 0x06e4],
  [0x06e7, 0x06e8],
  [0x06ea, 0x06ed],
  [0x070f, 0x070f],
  [0x0711, 0x0711],
  [0x0730, 0x074a],
  [0x07a6, 0x07b0],
  [0x07eb, 0x07f3],
  [0x0901, 0x0902],
  [0x093c, 0x093c],
  [0x0941, 0x0948],
  [0x094d, 0x094d],
  [0x0951, 0x0954],
  [0x0962, 0x0963],
  [0x0981, 0x0981],
  [0x09bc, 0x09bc],
  [0x09c1, 0x09c4],
  [0x09cd, 0x09cd],
  [0x09e2, 0x09e3],
  [0x0a01, 0x0a02],
  [0x0a3c, 0x0a3c],
  [0x0a41, 0x0a42],
  [0x0a47, 0x0a48],
  [0x0a4b, 0x0a4d],
  [0x0a70, 0x0a71],
  [0x0a81, 0x0a82],
  [0x0abc, 0x0abc],
  [0x0ac1, 0x0ac5],
  [0x0ac7, 0x0ac8],
  [0x0acd, 0x0acd],
  [0x0ae2, 0x0ae3],
  [0x0b01, 0x0b01],
  [0x0b3c, 0x0b3c],
  [0x0b3f, 0x0b3f],
  [0x0b41, 0x0b43],
  [0x0b4d, 0x0b4d],
  [0x0b56, 0x0b56],
  [0x0b82, 0x0b82],
  [0x0bc0, 0x0bc0],
  [0x0bcd, 0x0bcd],
  [0x0c3e, 0x0c40],
  [0x0c46, 0x0c48],
  [0x0c4a, 0x0c4d],
  [0x0c55, 0x0c56],
  [0x0cbc, 0x0cbc],
  [0x0cbf, 0x0cbf],
  [0x0cc6, 0x0cc6],
  [0x0ccc, 0x0ccd],
  [0x0ce2, 0x0ce3],
  [0x0d41, 0x0d43],
  [0x0d4d, 0x0d4d],
  [0x0dca, 0x0dca],
  [0x0dd2, 0x0dd4],
  [0x0dd6, 0x0dd6],
  [0x0e31, 0x0e31],
  [0x0e34, 0x0e3a],
  [0x0e47, 0x0e4e],
  [0x0eb1, 0x0eb1],
  [0x0eb4, 0x0eb9],
  [0x0ebb, 0x0ebc],
  [0x0ec8, 0x0ecd],
  [0x0f18, 0x0f19],
  [0x0f35, 0x0f35],
  [0x0f37, 0x0f37],
  [0x0f39, 0x0f39],
  [0x0f71, 0x0f7e],
  [0x0f80, 0x0f84],
  [0x0f86, 0x0f87],
  [0x0f90, 0x0f97],
  [0x0f99, 0x0fbc],
  [0x0fc6, 0x0fc6],
  [0x102d, 0x1030],
  [0x1032, 0x1032],
  [0x1036, 0x1037],
  [0x1039, 0x1039],
  [0x1058, 0x1059],
  [0x1160, 0x11ff],
  [0x135f, 0x135f],
  [0x1712, 0x1714],
  [0x1732, 0x1734],
  [0x1752, 0x1753],
  [0x1772, 0x1773],
  [0x17b4, 0x17b5],
  [0x17b7, 0x17bd],
  [0x17c6, 0x17c6],
  [0x17c9, 0x17d3],
  [0x17dd, 0x17dd],
  [0x180b, 0x180d],
  [0x18a9, 0x18a9],
  [0x1920, 0x1922],
  [0x1927, 0x1928],
  [0x1932, 0x1932],
  [0x1939, 0x193b],
  [0x1a17, 0x1a18],
  [0x1b00, 0x1b03],
  [0x1b34, 0x1b34],
  [0x1b36, 0x1b3a],
  [0x1b3c, 0x1b3c],
  [0x1b42, 0x1b42],
  [0x1b6b, 0x1b73],
  [0x1dc0, 0x1dca],
  [0x1dfe, 0x1dff],
  [0x200b, 0x200f],
  [0x202a, 0x202e],
  [0x2060, 0x2063],
  [0x206a, 0x206f],
  [0x20d0, 0x20ef],
  [0x302a, 0x302f],
  [0x3099, 0x309a],
  [0xa806, 0xa806],
  [0xa80b, 0xa80b],
  [0xa825, 0xa826],
  [0xfb1e, 0xfb1e],
  [0xfe00, 0xfe0f],
  [0xfe20, 0xfe23],
  [0xfeff, 0xfeff],
  [0xfff9, 0xfffb],
  [0x10a01, 0x10a03],
  [0x10a05, 0x10a06],
  [0x10a0c, 0x10a0f],
  [0x10a38, 0x10a3a],
  [0x10a3f, 0x10a3f],
  [0x1d167, 0x1d169],
  [0x1d173, 0x1d182],
  [0x1d185, 0x1d18b],
  [0x1d1aa, 0x1d1ad],
  [0x1d242, 0x1d244],
  [0xe0001, 0xe0001],
  [0xe0020, 0xe007f],
  [0xe0100, 0xe01ef],
];

// Binary search to check if a character is in the combining table
function bisearch(ucs) {
  let min = 0;
  let max = combining.length - 1;

  if (ucs < combining[0][0] || ucs > combining[max][1]) return false;

  while (max >= min) {
    const mid = Math.floor((min + max) / 2);
    if (ucs > combining[mid][1]) min = mid + 1;
    else if (ucs < combining[mid][0]) max = mid - 1;
    else return true;
  }
  return false;
}

// Determine the display width of a single Unicode character
function wcwidth(ucs) {
  // Handle null character
  if (ucs === 0) return 0;
  // Handle C0/C1 control characters and DEL
  if (ucs < 32 || (ucs >= 0x7f && ucs < 0xa0)) return -1;
  // Handle combining characters
  if (bisearch(ucs)) return 0;
  // Handle SOFT HYPHEN
  if (ucs === 0x00ad) return 1;
  // Handle ZERO WIDTH SPACE
  if (ucs === 0x200b) return 0;

  // Check for East Asian Wide (W) or Full-width (F) characters
  if (
    (ucs >= 0x1100 && ucs <= 0x115f) || // Hangul Jamo init. consonants
    (ucs >= 0x2329 && ucs <= 0x232a) ||
    (ucs >= 0x2e80 && ucs <= 0xa4cf && ucs !== 0x303f) || // CJK ... Yi
    (ucs >= 0xac00 && ucs <= 0xd7a3) || // Hangul Syllables
    (ucs >= 0xf900 && ucs <= 0xfaff) || // CJK Compatibility Ideographs
    (ucs >= 0xfe10 && ucs <= 0xfe19) || // Vertical forms
    (ucs >= 0xfe30 && ucs <= 0xfe6f) || // CJK Compatibility Forms
    (ucs >= 0xff00 && ucs <= 0xff60) || // Fullwidth Forms
    (ucs >= 0xffe0 && ucs <= 0xffe6) ||
    (ucs >= 0x20000 && ucs <= 0x2fffd) || // CJK Unified Ideographs Extension
    (ucs >= 0x30000 && ucs <= 0x3fffd)
  ) {
    return 2;
  }
  // Emojis and symbols (approximation based on common wide characters)
  if (ucs >= 0x1f300 && ucs <= 0x1faff) {
    return 2;
  }
  // All other characters have width 1
  return 1;
}

function displayWidth(text) {
  let width = 0;
  for (const char of [...text]) {
    const code = char.codePointAt(0);
    const charWidth = wcwidth(code);
    if (charWidth < 0) return -1; // Control characters invalidate width
    width += charWidth;
  }
  return width;
}

function padEndDisplayWidth(text, targetWidth) {
  const current = displayWidth(text);
  if (current < 0) return text; // Handle invalid width
  return text + " ".repeat(Math.max(0, targetWidth - current));
}

function drawLine(left, mid1, mid2, mid3, right, w1, w2, w3, w4) {
  return (
    left +
    "─".repeat(w1 + 2) +
    mid1 +
    "─".repeat(w2 + 2) +
    mid2 +
    "─".repeat(w3 + 2) +
    mid3 +
    "─".repeat(w4 + 2) +
    right
  );
}

// New function to draw the bottom line with special characters
function drawBottomLine(w1, w2, w3, w4) {
  return (
    "╰" +
    "─".repeat(w1 + 2) +
    "┴" +
    "─".repeat(w2 + 2) +
    "┴" +
    "─".repeat(w3 + 2) +
    "┴" +
    "─".repeat(w4 + 2) +
    "╯"
  );
}

/**
 * Print a merged table combining social links and bot configs in a styled banner.
 *
 * @param {string} botName - The name of the bot.
 * @param {Object} [configs={}] - Key-value pairs for configuration display.
 * @param {Function} [colorL1=colors.lime] - Color function for left column 1.
 * @param {Function} [colorL2=colors.cyan] - Color function for left column 2.
 * @param {Function} [colorR1=colors.orange] - Color function for right column 1.
 * @param {Function} [colorR2=colors.magenta] - Color function for right column 2.
 */
function printMergedTableWithBanner(
  botName,
  configs = {},
  colorL1 = colors.lime,
  colorL2 = colors.cyan,
  colorR1 = colors.orange,
  colorR2 = colors.magenta
) {
  const configRows = Object.entries(configs).map(([k, v]) => {
    let val;
    if (Array.isArray(v)) val = `[${v.join(", ")}]`;
    else if (typeof v === "boolean") val = v ? "true" : "false";
    else val = String(v);
    return [k, val];
  });

  // Column widths
  const w1 = Math.max(
    ...socialRows.map(([k]) => displayWidth(k)),
    displayWidth("Platform")
  );
  const w2 = Math.max(
    ...socialRows.map(([, v]) => displayWidth(v)),
    displayWidth("Link")
  );
  const w3 = Math.max(
    ...configRows.map(([k]) => displayWidth(k)),
    displayWidth("Setting")
  );
  const w4 = Math.max(
    ...configRows.map(([, v]) => displayWidth(v)),
    displayWidth("Value")
  );

  const totalWidth = w1 + w2 + w3 + w4 + 3 * 3 + 2;

  // Print banner
  const title = `MeoMunDep ${botName} Automation Script`;
  const pad = Math.floor((totalWidth - displayWidth(title)) / 2);
  console.log(colors.green("╭" + "─".repeat(totalWidth) + "╮"));
  console.log(
    colors.green(
      "│" +
        " ".repeat(pad) +
        colors.pink(title) +
        " ".repeat(totalWidth - pad - displayWidth(title)) +
        "│"
    )
  );

  // Print table header
  console.log(colors.green(drawLine("├", "┬", "┬", "┬", "┤", w1, w2, w3, w4)));
  console.log(
    colors.green(
      `│ ${colors.red.bold(
        padEndDisplayWidth("My Social Network", w1)
      )} │ ${colors.red.bold(
        padEndDisplayWidth("Link", w2)
      )} │ ${colors.red.bold(
        padEndDisplayWidth("Setting", w3)
      )} │ ${colors.red.bold(padEndDisplayWidth("Value", w4))} │`
    )
  );
  console.log(colors.green(drawLine("├", "┼", "┼", "┼", "┤", w1, w2, w3, w4)));

  // Part 1: Print rows where both socialRows and configRows may have data
  const pairedRows = Math.min(socialRows.length, configRows.length);
  for (let i = 0; i < pairedRows; i++) {
    const [sKey, sVal] = socialRows[i];
    const [cKey, cVal] = configRows[i];
    console.log(
      colors.green(
        `│ ${colorL1(padEndDisplayWidth(sKey, w1))} │ ${colorL2(
          padEndDisplayWidth(sVal, w2)
        )} │ ${colorR1(padEndDisplayWidth(cKey, w3))} │ ${colorR2(
          padEndDisplayWidth(cVal, w4)
        )} │`
      )
    );
  }

  // Part 2: If there are more socialRows, print the remaining socialRows
  if (socialRows.length > pairedRows) {
    for (let i = pairedRows; i < socialRows.length; i++) {
      const [sKey, sVal] = socialRows[i];
      console.log(
        colors.green(
          `│ ${colorL1(padEndDisplayWidth(sKey, w1))} │ ${colorL2(
            padEndDisplayWidth(sVal, w2)
          )} │ ${colorR1(padEndDisplayWidth("", w3))} │ ${colorR2(
            padEndDisplayWidth("", w4)
          )} │`
        )
      );
    }
  }

  // Part 3: If there are more configRows, print a separator and the remaining configRows
  if (configRows.length > pairedRows) {
    if (socialRows.length > pairedRows) {
      // Add a separator if we printed extra socialRows
      console.log(
        colors.green(drawLine("├", "┼", "┼", "┼", "┤", w1, w2, w3, w4))
      );
    }
    for (let i = pairedRows; i < configRows.length; i++) {
      const [cKey, cVal] = configRows[i];
      console.log(
        colors.green(
          `│ ${colorL1(padEndDisplayWidth("", w1))} │ ${colorL2(
            padEndDisplayWidth("", w2)
          )} │ ${colorR1(padEndDisplayWidth(cKey, w3))} │ ${colorR2(
            padEndDisplayWidth(cVal, w4)
          )} │`
        )
      );
    }
  }

  // Use the new bottom line function with ┴ characters
  console.log(colors.green(drawBottomLine(w1, w2, w3, w4)));
}

module.exports = { printMergedTableWithBanner };
