type Ret = {
    obj: Record<string, any>;
    last: string;
};

export function diveToProperty(
    originalObject: Record<string, any>,
    key: string
): Ret | undefined {
    const segments = key.split('.');
    const last = segments.pop();

    if(!last) {
        console.error('Invalid key:', key);
        return;
    }

    let obj = originalObject;
    while(segments.length) {
        const next = segments.shift();
        if(!next) {
            console.error('Invalid key:', key);
            return;
        }

        if(!obj[next]) obj[next] = {};

        obj = obj[next];
    }

    return { obj, last };
}
