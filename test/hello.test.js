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

  test("should say hello to given name", function () {
    // setup
    const name = "Mike";
  
    // execute
    const result = hello(name);
  
    // expectations
    expect(result).toEqual("Hello Mike!");
  });