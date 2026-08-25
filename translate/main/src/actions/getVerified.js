"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERIFIED_DIR = void 0;
exports.getVerifiedIpc = getVerifiedIpc;
exports.getVerified = getVerified;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadJson_1 = require("./loadJson");
exports.VERIFIED_DIR = path_1.default.join('main', 'verified');
function getVerifiedIpc(event, lang) {
    event.returnValue = getVerified(lang);
}
function getVerified(lang) {
    const verifiedPath = path_1.default.join(exports.VERIFIED_DIR, `verified_${lang}.json`);
    if (!fs_1.default.existsSync(verifiedPath)) {
        fs_1.default.writeFileSync(verifiedPath, JSON.stringify({}));
    }
    return (0, loadJson_1.loadJson)(verifiedPath);
}
//# sourceMappingURL=getVerified.js.map