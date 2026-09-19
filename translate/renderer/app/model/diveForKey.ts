type Obj = Record<string, any>;

// Specifically for verified object
export function diveForKey(
    obj: Obj,
    fullKey: string,
    failOnMiss: boolean = true
): string[] {
    const segments = fullKey.split('.');

    let o = obj;
    while(segments.length) {
        const next = segments.shift();
        if(!o || !next) {
            if(failOnMiss) console.error('Invalid key:', fullKey);
            break;
        }
        o = o[next];
    }

    if(o && !Array.isArray(o)) {
        if(failOnMiss) console.error('Invalid key:', fullKey);
        return [];
    }

    return o;
}
