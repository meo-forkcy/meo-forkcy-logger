# 📜 CHANGELOG

## [1.0.3] - 2025-09-15

### Added

- New `countdown()` utility function with multiple animation styles:
  - `"spinner"`, `"dots"`, `"hearts"`, `"animeFace"`, `"sparkle"`
- Example script `examples/countdown.js`
- Documentation and README update for countdown usage

---

## [1.0.2] - 2025-09-15

### Added

- `stop()` and `resume()` methods to `Logger` to control logging dynamically

### Changed

- `Logger.log()` now respects the `stopped` flag and will not output logs when stopped

---

## [1.0.1] - 2025-09-04

### Added

- `constants/` folder to store shared constants (e.g. `FACES`)
- Random face support when no `defaultAccount` is provided in `Logger`
- Cleaner project structure and import paths
- Improved documentation for `Logger` and `Banner`
- More examples...

### Changed

- Updated `logger.js` to load constants from `../constants`
- Refactored folder tree for better maintainability

---

## [1.0.0] - 2025-07-25

### Added

- Initial release 🎉
- Logger with multiple log types and defaultAccount support
- printMergedTableWithBanner function with flexible color overrides
- CLI-friendly examples
- Support for commonjs + npm-ready structure

---
