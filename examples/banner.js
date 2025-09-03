// banner.js - Example usage of printMergedTableWithBanner

const colors = require("meo-forkcy-colors");
const { printMergedTableWithBanner } = require("../index.js");

const CONFIGS = {
  skipInvalidProxy: false,
  delayEachAccount: [5, 8],
  timeToRestartAllAccounts: 300,
  howManyAccountsRunInOneTime: 36,
  doTasks: true,
  playGames: true,
  referralCodes: [
    "code1",
    "code2",
    "code3",
    "code4",
    "code5",
    "code6",
    "code7",
    "code8",
    "code9",
    "code10",
    "code11",
    "code12",
    "code13",
    {
      code: "code14",
      description: "Description for code14",
    },
  ],
};

console.log("👉 Demo: printMergedTableWithBanner");

// Basic usage
printMergedTableWithBanner("Botname1", CONFIGS);

// With left column in red
printMergedTableWithBanner("Botname2", CONFIGS, colors.red);

// With custom colors for left columns
printMergedTableWithBanner("Botname3", CONFIGS, colors.skyBlue, colors.red);

// With custom colors for both left and right columns
printMergedTableWithBanner(
  "Botname4",
  CONFIGS,
  colors.white,
  colors.red,
  colors.skyBlue
);

// Full color customization
printMergedTableWithBanner(
  "Botname5",
  CONFIGS,
  colors.gray,
  colors.skyBlue,
  colors.white,
  colors.red
);
