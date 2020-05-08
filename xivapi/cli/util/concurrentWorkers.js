const CONCURRENT_CALLS_MAX = 10;
const CONCURRENT_CALL_TIMEOUT = 500;

module.exports = async function concurrentWorkers(callback) {
    const workers = []; // The workers to await
    let cur = new Cur(); // The current index of IDS for workers

    // Initialize the concurrent calls
    for(let i = 0; i < CONCURRENT_CALLS_MAX; i++) {
        workers.push(new Promise((resolve) => next(resolve)));
    }

    // Await all concurrent calls
    await Promise.all(workers);

    function next(resolve) {
        setTimeout(() => {
            const cbPromise = callback(cur, resolve, next);
            if(cbPromise) cbPromise.then(() => next(resolve));
        }, CONCURRENT_CALL_TIMEOUT);
    }
};

class Cur {
    constructor() {
        this.value = 0;
    }

    get next() {
        return this.value++;
    }
}
