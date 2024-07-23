const { add, greetUser } = require("./script");

test("Greet user", () => {
  expect(greetUser("Sam")).toBe("Hello, Sam!");
});

test("Add two numbers", () => {
    expect(add(1, 2)).toBe(3);
});
