const soma = require("./");
const {it, expect} = require("./lib");

it("should sum 2 values", () => {
  expect(soma(10,20)).toBe(30);
})

it("should sum 3 values", () => {
  expect(soma(10, 10, 10)).toBe(30);
})




