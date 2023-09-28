
  function hello(name = "World") {
    if (name) {
        return "Hello " + name + "!";
      } else {
        return "Hello World!";
      }
  }
  
  module.exports = hello;

