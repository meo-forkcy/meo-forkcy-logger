# meo-forkcy-logger

> 🐱 Terminal logger and banner printer for bots & scripts.
> Provides color-coded logs, structured status outputs, and customizable banners with ease.

---

## ✨ Features

- 📝 Easy-to-use Logger class with built-in styles
- 🎨 ANSI-colored banners with table-style display
- 🛠️ Predefined log types: info, error, success, retry, etc.
- 🔧 Custom default account for logging context
- 📦 Designed for CLI tools, bots, and automation workflows

---

## 📦 Installation

```bash
npm install meo-forkcy-logger
```

---

## 🚀 Usage

### Logger

```js
const { Logger } = require("meo-forkcy-logger");

const logger = new Logger("my-bot");
logger.log("Operation failed", "error");
logger.log("user123", "Operation completed", "success");

const loggerWithDefault = new Logger("my-bot", "DefaultWallet");
loggerWithDefault.log("Operation done", "done");
```

### Banner Printer

```js
const colors = require("meo-forkcy-colors");
const { printMergedTableWithBanner } = require("meo-forkcy-logger");

const config = {
  delayEachAccount: [5, 10],
  howManyAccountsRunInOneTime: 10,
  doTasks: true,
};

printMergedTableWithBanner("MyBot", config);
printMergedTableWithBanner("ColoredBot", config, colors.red, colors.cyan);
```

---

## 📂 Examples

Run example scripts:

```bash
npm run example
```

---

## 📁 File Structure

```
├── constants/                # Holds shared constants (faces, icons, etc.)
│   └── index.js              # Exports FACES and other shared constants
│
├── examples/                 # Usage examples
│   ├── index.js
│   ├── banner.js
│   ├── logger.js
|   └── countdown.js
│
├── lib/                      # Core library logic
│   ├── logger.js
│   ├── banner.js
|   └── countdown.js
│
├── .gitignore
├── index.js                  # Package entry point, re-exports from lib/
├── LICENSE
├── package.json
├── package-lock.json
├── eslint.config.mjs
├── README.md
└── CHANGELOG.md
```

---

## 🧱 API

### Logger class

```ts
new Logger(botName: string, defaultAccount?: string);
logger.log(accountOrMessage: string, messageOrType: string, type?: string);
```

### printMergedTableWithBanner

```ts
printMergedTableWithBanner(
  botName: string,
  configObject: Record<string, any>,
  ...colors: string[]
);
```

### countdown

```ts
countdown(
  sec: number,
  options?: {
    fps?: number;   // Frames per second (default: 30)
    style?: string; // Animation style (default: "spinner")
  }
): Promise<void>;
```

---

## 📄 License

MIT © 2025 meo-forkcy

---

## 🙋 Support & Issues

If you encounter a bug or want to request a feature, feel free to open an issue:
👉 https://github.com/meo-forkcy/meo-forkcy-logger/issues

---
