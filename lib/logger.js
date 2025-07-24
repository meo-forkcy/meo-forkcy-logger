const colors = require("meo-forkcy-colors");
const { getTime } = require("meo-forkcy-utils");

/**
 * Logger class for structured and colored logging.
 */
class Logger {
  /**
   * @param {string} botName - The name of the bot displayed in logs.
   * @param {string|null} [defaultAccount=null] - Optional default account identifier.
   */
  constructor(botName, defaultAccount = null) {
    this.botName = botName;
    this.defaultAccount = defaultAccount;

    /**
     * Log type definitions with symbols and colors.
     * @type {Object.<string, {symbol: string, color: Function}>}
     */
    this.LOG_TYPES = {
      done: { symbol: "[>]", color: colors.blue },
      retry: { symbol: "[/]", color: colors.grey },
      info: { symbol: "[i]", color: colors.green },
      update: { symbol: "[^]", color: colors.cyan },
      failed: { symbol: "[-]", color: colors.pink },
      error: { symbol: "[!]", color: colors.bold.red },
      announce: { symbol: "[*]", color: colors.yellow },
      pending: { symbol: "[%]", color: colors.magenta },
      success: { symbol: "[√]", color: colors.bold.lime },
      warning: { symbol: "[?]", color: colors.bold.orange },
    };
  }

  /**
   * Log a message with structured formatting.
   *
   * Overload 1: With custom account
   * @param {string} accountData - The account identifier.
   * @param {string} message - The log message.
   * @param {string} type - The type of log (e.g. 'info', 'error', etc).
   *
   * Overload 2: Use default account
   * @param {string} message - The log message.
   * @param {string} type - The type of log.
   */
  log(accountDataOrMessage, messageOrType, maybeType) {
    const timestamp = getTime(Date.now());

    let accountData, message, type;
    if (maybeType !== undefined) {
      accountData = accountDataOrMessage;
      message = messageOrType;
      type = maybeType;
    } else {
      accountData = this.defaultAccount || "Unknown";
      message = accountDataOrMessage;
      type = messageOrType;
    }

    const logType = this.LOG_TYPES[type] || {
      symbol: "[#]",
      color: colors.white,
    };

    const logMessage = `[${colors.grey(timestamp)}] - ${colors.italic(
      `@MeoMunDep x ${this.botName}`
    )} - ${logType.symbol} ${colors.white(accountData)} | ${message}`;

    console.log(logType.color(logMessage));
  }
}

module.exports = { Logger };
