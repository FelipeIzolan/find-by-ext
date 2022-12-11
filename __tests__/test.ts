import { resolve } from "path";
import { findByExt, findOneByExt, findLengthByExt } from "../index";

const dir = resolve("./__tests__/project");

test("findByExt", () => {
  let ext = [".go", ".mod"];
  let result = [
    "D:\\find-by-ext\\__tests__\\project\\go.mod",
    "D:\\find-by-ext\\__tests__\\project\\index.go",
    "D:\\find-by-ext\\__tests__\\project\\src\\_box.go",
    "D:\\find-by-ext\\__tests__\\project\\src\\_input.go"
  ]

  expect(findByExt(dir, ext)).toMatchObject(result);
});

test("findOneByExt", () => {
  let ext = ".json";
  let result = 'D:\\find-by-ext\\__tests__\\project\\src\\pattern.json';

  expect(findOneByExt(dir, ext)).toBe(result);
});

test("findLengthByExt", () => {
  let ext = [".go", ".md", ".json"];
  let result = [
    "D:\\find-by-ext\\__tests__\\project\\doc\\_box.md",
    "D:\\find-by-ext\\__tests__\\project\\doc\\_input.md",
    "D:\\find-by-ext\\__tests__\\project\\index.go",
    "D:\\find-by-ext\\__tests__\\project\\README.md",
    "D:\\find-by-ext\\__tests__\\project\\src\\pattern.json"
  ]

  expect(findLengthByExt(dir, ext, 5)).toMatchObject(result);
})
