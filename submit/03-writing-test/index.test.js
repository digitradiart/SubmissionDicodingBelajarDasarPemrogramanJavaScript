import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

const actualValue = sum(2, 3);
const expectedValue = 5;

test("penjumlahan dua angka", () => {
  assert.equal(actualValue, expectedValue);
});
