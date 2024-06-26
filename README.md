# 🐀 find-by-ext

![Sprite-0001](https://github.com/FelipeIzolan/find-by-ext/assets/80170121/27881251-99b4-43d3-967d-b499d7550d19)


Find files inside folders by extname.

## 🚀 Installation

```
npm install find-by-ext
```

## 🍋 Usage

```ts
import { findByExt, findByExtOne, findByExtLimit } from "../index";

const __dirname = path.resolve();

var scripts = findByExt(__dirname, [".cmd", ".sh", ".ps1", ".bat"]);
var image = findByExtOne(__dirname, [".png", ".jpg", ".gif", ".webp"]);
var _4doc = findByExtLimit(__dirname, [".txt", ".md", ".markdown"], 4);
```

## 🔖 Reference

- **findByExt(dirname, whitelist)**
- **findByExtOne(dirname, whitelist)**
- **findByExtLimit(dirname, whitelist, limit)**

## 📜 License

- [find-by-ext](https://github.com/FelipeIzolan/find-by-ext) - MIT
