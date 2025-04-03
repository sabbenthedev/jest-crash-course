# **Jest Crash Course - FreeCodeCamp**

link - https://www.freecodecamp.org/news/how-to-test-javascript-code-with-jest/

This repository showcases my learning progress from the FreeCodeCamp Jest crash course. 
It contains essential Jest concepts and tests, demonstrating my basic understanding of JavaScript testing.

## **1. Basic Concepts in Jest**
### sum.js - A Simple Sum Function
```javascript
function sum(a, b) {
    return a + b;
}

module.exports = sum;
```
### sum.test.js - Basic Jest Test
```javascript
// Basic Concepts in Jest

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("2 plus 2 is 4", () => {
    expect(sum(2, 2)).toBe(4);
});
```
## **2. Jest Matchers**
### sum.test.js - Different Jest Assertions
```javascript
// Matchers

test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => { // should be only null or undefined any of
    const n = null;
    expect(n).toBeFalsy();
});

test("one is truthy", () => { // should be only true or any value of
    const n = 1;
    expect(n).toBeTruthy();
});
```
## **3. Error Handling in Jest**
### myFunction.js - Function with Error Handling
```javascript
function myFunction(input) {
    if (typeof input !== "number") {
        throw new Error("Invalid Input")
    }
}

module.exports = myFunction;
```
### myFunction.test.js - Testing Error Handling
```javascript
// Matchers - error handling

const myFunction = require("./myFunction")

// essential aspect of js for error handling 

test("throws on invalid input", () => {
    expect(() => {
        myFunction("lflofskls"); // if value is 3 - test failed else if invalid input - test passed
    }).toThrow();
});
```
## **4. Testing Asynchronous Code**
### asyncdata.js - Simulated API Call with Callback
```javascript
// simulates a delayed operation - API call using set timeout, calls a callback with result

function fetchData(callback) {
    setTimeout(() => {
        callback("banana");
    }, 1000);
}

module.exports = fetchData;
```
### asyncdata.test.js - Testing Asynchronous Code
```javascript
// Testing Asynchronous code

const fetchData = require("./asyncdata");

test("the data is banana", done => { // done is specified to signal that test is complete
    function callback(data) {
        try {
            expect(data).toBe("banana");
            done(); // test complete
        } catch(error) {
            done(error); // test complete
        }
    }
    fetchData(callback);
}); 
```
### asyncpromise.js - Simulated API Call with Promise
```javascript
// basic function that returns a promise resolving after delay or rejected

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("banana"), 1000);
    });
}

module.exports = fetchPromise;
```
### asyncpromise.test.js - Testing Asynchronous Code (Promise)
```javascript
// Testing Asynchronous code

const fetchPromise = require("./asyncpromise")

test("the data is banana", async () => { //async - function can pause and resume at some point, like waiting to finish
    const data = await fetchPromise(); //await - telling to wait till the promise settles and returns its result
    expect(data).toBe("banana");
})
```
## **5. Mocking in Jest**
### mockfunctions.test.js - Using Jest Mocks
```javascript
// by mocking we can simulate its behavior and focus solely on testing functions

test("spying on a method of an object", () => {
    const video = {
        play() {
            return true;
        },
    };
    const spy = jest.spyOn(video, "play"); //allows to observe functions real behavior
    video.play();
    expect(spy).toHaveBeenCalled(); //play was called, validates the functionality
    spy.mockRestore(); //restores the original implementation of that function
})
```
