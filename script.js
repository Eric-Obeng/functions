function add(num1, num2) {
  return num1 + num2;
}

function greetUser(name) {
  return `Hello, ${name}!`;
}

const reverse = (str) => {
    return str.split("").reverse().join("");
}

module.exports = { add, greetUser, reverse };
