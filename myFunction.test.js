// Matchers - error handling

const myFunction = require("./myFunction")

// essential aspect of js for error handling 

test("throws on invalid input", () => {
    expect(() => {
        myFunction("lflofskls"); // if value is 3 - test failed else if invalid input - test passed
    }).toThrow();
});