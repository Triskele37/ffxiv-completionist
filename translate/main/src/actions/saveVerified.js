"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveVerified = saveVerified;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadJson_1 = require("./loadJson");
const getVerified_1 = require("./getVerified");
function saveVerified(event, { lang, issue, reasons }) {
    const verifiedPath = path_1.default.join(getVerified_1.VERIFIED_DIR, `verified_${lang}.json`);
    const verified = (0, loadJson_1.loadJson)(verifiedPath);
    const segments = issue.key.split('.');
    const last = segments.pop();
    if (!last) {
        console.error('Invalid key:', issue.key);
        event.returnValue = false;
        return;
    }
    let obj = verified;
    while (segments.length) {
        const next = segments.shift();
        if (!next) {
            console.error('Invalid key:', issue.key);
            event.returnValue = false;
            return;
        }
        if (!obj[next])
            obj[next] = {};
        obj = obj[next];
    }
    obj[last] = reasons.join(' ; ');
    fs_1.default.writeFileSync(verifiedPath, JSON.stringify(verified, null, 4));
    event.returnValue = true;
}
//# sourceMappingURL=saveVerified.js.map