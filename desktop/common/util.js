"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObj = isObj;
function isObj(v) {
    if (!v)
        return false;
    if (Array.isArray(v))
        return false;
    return typeof v === 'object';
}
//# sourceMappingURL=util.js.map