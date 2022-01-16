"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWindowState = exports.saveWindowState = void 0;
var electron_1 = require("electron");
var fs = require("fs");
var path = require("path");
var initPath = path.join(electron_1.app.getPath('userData'), 'init.json');
function saveWindowState(mainWindow) {
    var data = {
        bounds: mainWindow.getBounds(),
        isMaximized: mainWindow.isMaximized()
    };
    fs.writeFileSync(initPath, JSON.stringify(data));
}
exports.saveWindowState = saveWindowState;
function loadWindowState() {
    var _a;
    var data;
    try {
        data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
    }
    catch (e) { }
    var size = electron_1.screen.getPrimaryDisplay().workAreaSize;
    var isMaximized;
    var height;
    var width;
    var x;
    var y;
    isMaximized = (_a = data === null || data === void 0 ? void 0 : data.isMaximized) !== null && _a !== void 0 ? _a : false;
    height = (data === null || data === void 0 ? void 0 : data.bounds.height) || size.height || 600;
    width = (data === null || data === void 0 ? void 0 : data.bounds.width) || size.width || 800;
    x = (data === null || data === void 0 ? void 0 : data.bounds.x) || 100;
    y = (data === null || data === void 0 ? void 0 : data.bounds.y) || 100;
    return { height: height, width: width, x: x, y: y, isMaximized: isMaximized };
}
exports.loadWindowState = loadWindowState;
//# sourceMappingURL=windowState.js.map