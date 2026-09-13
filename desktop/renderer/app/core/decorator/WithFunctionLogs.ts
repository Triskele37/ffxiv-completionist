/**
 * Adds a log at the start of every function member
 * */
export function WithFunctionLogs<
    T extends abstract new (...args: any[]) => any
>(target: T) {
    const properties = Object.getOwnPropertyNames(target.prototype);
    for(const name of properties) {
        if(name === 'constructor') continue;

        const descriptor = Object.getOwnPropertyDescriptor(target.prototype, name);
        if(descriptor?.value instanceof Function) {
            const original = descriptor.value;

            descriptor.value = function(...args: any[]) {
                console.log(target.name, name);
                return original.apply(this, args);
            };

            Object.defineProperty(target.prototype, name, descriptor);
        }
    }

    return target;
}
