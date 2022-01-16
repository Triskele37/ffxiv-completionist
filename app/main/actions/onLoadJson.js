"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onLoadJson = void 0;
var electron_1 = require("electron");
var fs = require("fs");
function onLoadJson() {
    electron_1.ipcMain.on('load-json', function (event, path) {
        event.returnValue = JSON.parse(fs.readFileSync(path, 'utf8'));
    });
}
exports.onLoadJson = onLoadJson;
//# sourceMappingURL=onLoadJson.js.map