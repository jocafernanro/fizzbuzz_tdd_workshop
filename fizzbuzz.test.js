const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("should print 1 if the given value is 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test("should print fizz if the given value is 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(expected).toBe(result)
  });

  test("should print fizz if the given value is multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });
});
