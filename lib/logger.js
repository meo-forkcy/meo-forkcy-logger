const { FACES } = require("../constants");
const colors = require("meo-forkcy-colors");
const { getTime, getRandomNumber } = require("meo-forkcy-utils");

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
    this.defaultAccount =
      defaultAccount ?? FACES[getRandomNumber(0, FACES.length - 1)];
    this.stopped = false;

    /**
     * Log type definitions with symbols and colors.
     * @type {Object.<string, {symbol: string, color: Function}>}
     */
    this.LOG_TYPES = {
      info: { symbol: "[i]", color: colors.green },
      warn: { symbol: "[?]", color: colors.bold.orange },
      error: { symbol: "[!]", color: colors.bold.red },
      success: { symbol: "[√]", color: colors.bold.lime },
      debug: { symbol: "[~]", color: colors.grey },
      notify: { symbol: "[*]", color: colors.yellow },
      update: { symbol: "[^]", color: colors.cyan },
      pending: { symbol: "[%]", color: colors.magenta },
      retry: { symbol: "[/]", color: colors.grey },
      failed: { symbol: "[-]", color: colors.pink },
      done: { symbol: "[>]", color: colors.blue },
      start: { symbol: "[+]", color: colors.bold.blue },
      stop: { symbol: "[@]", color: colors.bold.purple },
    };

    /**
     * Alias map for shorthand and alternate names.
     * @type {Object.<string, string>}
     */
    this.ALIAS = {
      // alternate long forms
      announce: "notify",
      warning: "warn",
      successed: "success",

      // shorthand (2-letter)
      in: "info",
      wn: "warn",
      er: "error",
      sc: "success",
      db: "debug",
      nt: "notify",
      up: "update",
      pd: "pending",
      rt: "retry",
      fl: "failed",
      dn: "done",
      st: "start",
      sp: "stop",
    };
  }

  /**
   * Prevents all further logs from being printed.
   */
  stop() {
    this.stopped = true;
  }

  /**
   * Re-enables logging after stop().
   */
  resume() {
    this.stopped = false;
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
    if (this.stopped) return; // <-- ignore logs when stopped

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
      `@Meomundep x ${this.botName}`
    )} - ${logType.symbol} ${colors.white(accountData)} | ${message}`;

    console.log(logType.color(logMessage));
  }
}

module.exports = { Logger };
