"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = getData;
const preloadJson_1 = require("./preloadJson");
/**
 * Simple handoff of cached data to renderer
 */
function getData(event) {
    event.returnValue = preloadJson_1.JSON_CACHE;
}
//# sourceMappingURL=getData.js.map