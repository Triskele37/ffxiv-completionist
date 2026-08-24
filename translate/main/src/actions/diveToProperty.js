"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diveToProperty = diveToProperty;
function diveToProperty(originalObject, key) {
    const segments = key.split('.');
    const last = segments.pop();
    if (!last) {
        console.error('Invalid key:', key);
        return;
    }
    let obj = originalObject;
    while (segments.length) {
        const next = segments.shift();
        if (!next) {
            console.error('Invalid key:', key);
            return;
        }
        if (!obj[next])
            obj[next] = {};
        obj = obj[next];
    }
    return { obj, last };
}
//# sourceMappingURL=diveToProperty.js.map