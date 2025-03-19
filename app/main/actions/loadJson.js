"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJson = void 0;
var preloadJson_1 = require("./preloadJson");
/**
 * NOTE - remember to keep this OS agnostic
 */
function loadJson(event, key) {
    // Show unloaded data on the last group
    var lastGroup = 'social.emotes.expressions';
    if (key.includes(lastGroup)) {
        var unloaded = Object.keys(preloadJson_1.JSON_CACHE)
            .filter(function (k) { return k !== 'bookmarks' && k !== 'custom'; })
            .filter(function (k) { return k !== lastGroup; });
        if (unloaded.length) {
            console.log('Unloaded groups!');
            console.log(unloaded);
        }
    }
    try {
        // Check if passed group has a self-named file
        if (preloadJson_1.JSON_CACHE[key]) {
            event.returnValue = preloadJson_1.JSON_CACHE[key];
            delete preloadJson_1.JSON_CACHE[key];
            return;
        }
        // Check if passed group has/is an index file
        var keyIfIndex = [key, '_index'].filter(function (p) { return p; }).join('.');
        if (preloadJson_1.JSON_CACHE[keyIfIndex]) {
            event.returnValue = preloadJson_1.JSON_CACHE[keyIfIndex];
            delete preloadJson_1.JSON_CACHE[keyIfIndex];
            return;
        }
        console.log("Could not find file for: ".concat(key));
        // Failed to find file
        event.returnValue = null;
    }
    catch (e) {
        console.error('load-json failed:', e);
        event.returnValue = null;
    }
}
exports.loadJson = loadJson;
//# sourceMappingURL=loadJson.js.map