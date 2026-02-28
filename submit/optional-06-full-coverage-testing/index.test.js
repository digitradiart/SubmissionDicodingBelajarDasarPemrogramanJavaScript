import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("mengembalikan 0 jika parameter pertama bukan number", () => {
  assert.equal(sum("10", 5), 0);
});

test("mengembalikan 0 jika parameter kedua bukan number", () => {
  assert.equal(sum(10, "5"), 0);
});

test("mengembalikan 0 jika parameter pertama bernilai negatif", () => {
  assert.equal(sum(-10, 5), 0);
});

test("mengembalikan 0 jika parameter kedua bernilai negatif", () => {
  assert.equal(sum(10, -5), 0);
});

test("mengembalikan jumlah jika kedua parameter valid dan tidak negatif", () => {
  assert.equal(sum(10, 5), 15);
});

test("mengizinkan nilai nol sebagai parameter valid", () => {
  assert.equal(sum(0, 5), 5);
});
