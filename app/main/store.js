"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfig = exports.store = exports.paths = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var paths = {
    config: path.join(electron_1.app.getPath('userData'), 'config.json'),
    save: null
};
exports.paths = paths;
var store = {};
exports.store = store;
function saveConfig() {
    fs.writeFileSync(paths.config, JSON.stringify(store.config, null, 4));
}
exports.saveConfig = saveConfig;
//# sourceMappingURL=store.js.map