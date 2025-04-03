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