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

  test("should print buzz if the given value is 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test("should print buzz if the given value is multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test("should print fizzbuzz if the given value is multiple of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
});
