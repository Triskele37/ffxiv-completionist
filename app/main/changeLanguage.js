"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLanguage = void 0;
var electron_1 = require("electron");
var configStore_1 = require("./store/configStore");
var langOptions = ['English', 'French', 'Cancel'];
var langCodes = ['en', 'fr'];
var changeLanguage = function (mainWindow) { return function () {
    var result = electron_1.dialog.showMessageBoxSync({
        message: 'Please select a language',
        buttons: langOptions,
        defaultId: 4
    });
    // Do stuff only if something was selected
    if (result !== null && result !== undefined && result !== langOptions.length - 1) {
        configStore_1.store.config['lang'] = langCodes[result];
        configStore_1.saveConfig();
        mainWindow.reload();
    }
}; };
exports.changeLanguage = changeLanguage;
//# sourceMappingURL=changeLanguage.js.map