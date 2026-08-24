"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJson = loadJson;
const fs_1 = __importDefault(require("fs"));
function loadJson(jsonPath) {
    return JSON.parse(fs_1.default.readFileSync(jsonPath, 'utf8'));
}
//# sourceMappingURL=loadJson.js.map