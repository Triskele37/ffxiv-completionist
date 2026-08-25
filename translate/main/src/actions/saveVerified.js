"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveVerified = saveVerified;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadJson_1 = require("./loadJson");
const prettyJson_1 = require("./prettyJson");
const getVerified_1 = require("./getVerified");
const diveToProperty_1 = require("./diveToProperty");
function saveVerified(event, { lang, issue }) {
    const verifiedPath = path_1.default.join(getVerified_1.VERIFIED_DIR, `verified_${lang}.json`);
    const verified = (0, loadJson_1.loadJson)(verifiedPath);
    const { obj, last } = (0, diveToProperty_1.diveToProperty)(verified, issue.key) ?? {};
    if (!obj || !last) {
        event.returnValue = false;
        return;
    }
    if (!issue.reasons?.length) {
        delete obj[last];
    }
    else {
        obj[last] = issue.reasons;
    }
    fs_1.default.writeFileSync(verifiedPath, (0, prettyJson_1.prettyJson)(verified));
    event.returnValue = true;
}
//# sourceMappingURL=saveVerified.js.map