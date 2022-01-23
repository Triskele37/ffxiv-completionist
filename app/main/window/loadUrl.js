"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWindowUrl = void 0;
var path = require("path");
var fs = require("fs");
var url = require("url");
var window_1 = require("../store/window");
function loadWindowUrl(isServe) {
    if (isServe) {
        window_1.windowStore.window.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: require(path.join(__dirname, '../../../node_modules/electron'))
        });
        window_1.windowStore.window.loadURL('http://localhost:4200');
    }
    else {
        // Path when running electron executable
        var pathIndex = './index.html';
        if (fs.existsSync(path.join(__dirname, '../../../dist/index.html'))) {
            // Path when running electron in local folder
            pathIndex = '../../../dist/index.html';
        }
        window_1.windowStore.window.loadURL(url.format({
            pathname: path.join(__dirname, pathIndex),
            protocol: 'file:',
            slashes: true
        }));
    }
}
exports.loadWindowUrl = loadWindowUrl;
//# sourceMappingURL=loadUrl.js.map