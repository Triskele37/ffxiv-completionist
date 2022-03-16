"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var config_1 = require("./config");
exports.playerStore = {
    path: null,
    store: null,
    save: function () {
        fs.writeFileSync(exports.playerStore.path, JSON.stringify(exports.playerStore.store, null, 4));
    },
    load: function () {
        var base = config_1.configStore.store['store-loc'] || electron_1.app.getPath('userData');
        var file = (config_1.configStore.store['store-name'] || 'completion') + '.json';
        exports.playerStore.path = path.join(base, file);
        exports.playerStore.store = {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'version': ''
        };
        // Get if it exists
        var save = {};
        if (fs.existsSync(exports.playerStore.path)) {
            save = JSON.parse(fs.readFileSync(exports.playerStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        Object.keys(exports.playerStore.store).forEach(function (key) {
            if (save[key] !== undefined)
                exports.playerStore.store[key] = save[key];
        });
    },
    get: function (event) {
        if (!config_1.configStore.store)
            config_1.configStore.load();
        exports.playerStore.load();
        event.returnValue = exports.playerStore.store;
    },
    set: function (event, newSave) {
        exports.playerStore.store = newSave;
        exports.playerStore.save();
        event.returnValue = null;
    }
};
//# sourceMappingURL=player.js.map