"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSplashUrl = exports.loadWindowUrl = void 0;
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
        if (fs.existsSync(path.join(__dirname, '../../../app/index.html'))) {
            // Path when running release
            pathIndex = '../../../app/index.html';
        }
        window_1.windowStore.window.loadURL(url.format({
            pathname: path.join(__dirname, pathIndex),
            protocol: 'file:',
            slashes: true
        }));
    }
}
exports.loadWindowUrl = loadWindowUrl;
function loadSplashUrl() {
    // windowStore.splash.webContents.openDevTools();
    window_1.windowStore.splash.loadURL("file://" + __dirname + "/../../splash.html");
}
exports.loadSplashUrl = loadSplashUrl;
//# sourceMappingURL=loadUrl.js.map