const { add, greetUser, reverse } = require("./script");

test("Greet user", () => {
  expect(greetUser("Sam")).toBe("Hello, Sam!");
});

test("Add two numbers", () => {
    expect(add(1, 2)).toBe(3);
});

test('Reverse string', () => {
    expect(reverse('hello')).toBe('olleh');
})
