"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSave = exports.newSave = void 0;
var electron_1 = require("electron");
var path = require("path");
var config_1 = require("../store/config");
var player_1 = require("../store/player");
function newSave(event) {
    var result = electron_1.dialog.showSaveDialogSync({
        defaultPath: path.join(config_1.configStore.store['store-loc'], 'completion.json'),
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    // Do stuff only if something was selected
    if (result)
        updateStoreLocation(result);
    event.returnValue = !!result;
}
exports.newSave = newSave;
function loadSave(event) {
    var result = electron_1.dialog.showOpenDialogSync(null, {
        defaultPath: config_1.configStore.store['store-loc'],
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    // Do stuff only if something was selected
    if (result)
        updateStoreLocation(result[0]);
    event.returnValue = !!result;
}
exports.loadSave = loadSave;
function updateStoreLocation(result) {
    // Modify the location the app points to
    var selected = path.parse(result);
    config_1.configStore.store['store-loc'] = selected.dir;
    config_1.configStore.store['store-name'] = selected.name;
    player_1.playerStore.path = path.join(selected.dir, selected.name);
    config_1.configStore.save();
}
//# sourceMappingURL=saveLocation.js.map