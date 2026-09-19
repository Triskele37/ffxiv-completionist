export function isObj(v: any): boolean {
    if(!v) return false;
    if(Array.isArray(v)) return false;

    return typeof v === 'object';
}
