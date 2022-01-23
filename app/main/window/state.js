"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWindowState = exports.saveWindowState = void 0;
var electron_1 = require("electron");
var config_1 = require("../store/config");
var window_1 = require("../store/window");
function saveWindowState() {
    config_1.configStore.store.window = __assign(__assign({}, window_1.windowStore.window.getBounds()), { max: window_1.windowStore.window.isMaximized() });
    config_1.configStore.save();
}
exports.saveWindowState = saveWindowState;
function loadWindowState() {
    if (!config_1.configStore.store)
        config_1.configStore.load();
    if (!config_1.configStore.store.window) {
        var primaryDisplay = electron_1.screen.getPrimaryDisplay();
        return {
            x: primaryDisplay.bounds.x,
            y: primaryDisplay.bounds.y,
            height: primaryDisplay.workAreaSize.height,
            width: primaryDisplay.workAreaSize.width
        };
    }
    else {
        return config_1.configStore.store.window;
    }
}
exports.loadWindowState = loadWindowState;
//# sourceMappingURL=state.js.map