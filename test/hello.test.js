const hello = require("../src/hello");

test("should say hello to given name", function () {
  // setup
  const name = "Luis";

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello Luis!");
});

test("should say 'Hello World!' when no name is provided", function () {
  // setup
  const expected = "Hello World!";

  // execute
  const result = hello();

  // expectations
  expect(result).toEqual(expected);
});

test("should say hello to other name", function () {
  // setup
  const name = "Mike";

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello Mike!");
});

test("should say 'Hello World!' when name is null", function () {
  // setup
  const name = null;

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello World!");
});

test("should say 'Hello World!' when name is undefined", function () {
  // setup
  const name = undefined;

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello World!");
});

test("should say 'Hello World!' when name is undefined", function () {
  // setup
  const name = undefined;

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello World!");
});

test("should say 'Hello World!' when name is empty string", function () {
  // setup
  const name = "";

  // execute
  const result = hello(name);

  // expectations
  expect(result).toEqual("Hello World!");
});