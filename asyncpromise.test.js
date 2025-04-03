// Testing Asynchronous code

const fetchPromise = require("./asyncpromise")

test("the data is banana", async () => {
    const data = await fetchPromise();
    expect(data).toBe("banana");
})