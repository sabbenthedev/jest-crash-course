// basic function that returns a promise resolving after delay or rejected

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("banana"), 1000);
    });
}

module.exports = fetchPromise;