function hello(name = "World") {
  if (name) {
    return "Hello " + name + "!";
  }
  return "Hello World!";
}

module.exports = hello;
