// simulates a delayed operation - API call using set timeout, calls a callback with result

function fetchData(callback) {
    setTimeout(() => {
        callback("banana");
    }, 1000);
}

module.exports = fetchData;