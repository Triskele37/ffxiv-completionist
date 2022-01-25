const CONCURRENT_CALLS_MAX = 5;
const CONCURRENT_CALL_TIMEOUT = 1000;

type ResolveCallback = () => void;
type NextCallback = (resolve: ResolveCallback) => void;
type WorkerCallback = (cur: Cur, resolve: ResolveCallback, next: NextCallback) => Promise<any> | void;

export async function concurrentWorkers(callback: WorkerCallback) {
    const workers = []; // The workers to await
    const cur = new Cur(); // The current index of IDS for workers

    // Initialize the concurrent calls
    for(let i = 0; i < CONCURRENT_CALLS_MAX; i++) {
        workers.push(new Promise((resolve) => next(resolve)));
    }

    // Await all concurrent calls
    return await Promise.all(workers);

    function next(resolve) {
        setTimeout(() => {
            const promise = callback(cur, resolve, next);
            if(promise instanceof Promise) promise.then(() => next(resolve));
        }, CONCURRENT_CALL_TIMEOUT);
    }
}

class Cur {
    value: number;

    constructor() {
        this.value = 0;
    }

    get next(): number {
        return this.value++;
    }
}
