// examples/index.js

const path = require("path");

console.log("👉 Running examples...\n");

try {
  console.log("🔹 Running banner example:\n");
  require(path.join(__dirname, "banner.js"));
} catch (err) {
  console.error("❌ Failed to run banner.js:", err);
}

console.log("\n----------------------------------\n");

try {
  console.log("🔹 Running logger example:\n");
  require(path.join(__dirname, "logger.js"));
} catch (err) {
  console.error("❌ Failed to run logger.js:", err);
}

console.log("\n✅ All examples completed.\n");
