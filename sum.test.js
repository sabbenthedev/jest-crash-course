// Basic Concepts in Jest

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("2 plus 2 is 4", () => {
    expect(sum(2, 2)).toBe(4);
});

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
