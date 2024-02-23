import { resolve } from "path";
import { findByExt, findByExtOne, findByExtLimit } from "../index";

const dirname = resolve("./__tests__/project");

test("findByExt", () => {
  let whitelist = [".go", ".mod"];
  let result = [
    resolve("./__tests__/project/go.mod"),
    resolve("./__tests__/project/index.go"),
    resolve("./__tests__/project/src/_box.go"),
    resolve("./__tests__/project/src/_input.go")
  ]

  expect(findByExt(dirname, whitelist)).toMatchObject(result);
});

test("findOneByExt", () => {
  let whitelist = [".json"];
  let result = resolve("./__tests__/project/src/pattern.json");

  expect(findByExtOne(dirname, whitelist)).toBe(result);
});

test("findLengthByExt", () => {
  let whitelist = [".go", ".md", ".json"];
  let result = [
    resolve("./__tests__/project/README.md"),
    resolve("./__tests__/project/doc/_box.md"),
    resolve("./__tests__/project/doc/_input.md"),
    resolve("./__tests__/project/index.go"),
    resolve("./__tests__/project/src/_box.go") 
  ]

  expect(findByExtLimit(dirname, whitelist, 5)).toMatchObject(result);
})
