// logger.js - Example usage of Logger

const { Logger } = require("../index.js");

console.log("👉 Demo: Logger");

// Create logger with bot name
const logger = new Logger("meo-forkcy-logger");

logger.stop();
logger.log("This will not show", "warning");
logger.resume();
logger.log("Logging resumed", "success");

// Without default account
logger.log("Operation completed!", "done");

// With explicit account ID
logger.log("user123", "Operation completed!", "done");
logger.log("user234", "Retrying connection...", "retry");
logger.log("user456", "System status", "info");
logger.log("user567", "New version available!", "update");
logger.log("user678", "Operation failed!", "failed");
logger.log("user789", "Critical error!", "error");
logger.log("user987", "Important notice", "announce");
logger.log("user876", "Processing request...", "pending");
logger.log("user654", "Task completed!", "success");
logger.log("user432", "Check configuration!", "warning");

// With default account
const logger2 = new Logger("meo-forkcy-logger_2", "Account 1");

logger2.log("Operation completed!", "done");
logger2.log("Retrying connection...", "retry");
logger2.log("System status", "info");
logger2.log("New version available!", "update");
