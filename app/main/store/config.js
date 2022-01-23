"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
exports.configStore = {
    path: path.join(electron_1.app.getPath('userData'), 'config.json'),
    store: null,
    save: function () {
        fs.writeFileSync(exports.configStore.path, JSON.stringify(exports.configStore.store, null, 4));
    },
    load: function () {
        // Default config structure
        exports.configStore.store = {
            'store-name': 'completion',
            'store-loc': electron_1.app.getPath('userData'),
            'lang': 'en',
            'starting-class': '',
            'last-breadcrumbs': ['FFXIV Completionist'],
            'chaining-enabled': false,
            'chain-history-limit': 10,
            'chain-min-threshold': 10,
            'table-filters': {
                completed: true,
                incomplete: true,
                excluded: true
            },
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'window': {
                x: 100,
                y: 100,
                width: 800,
                height: 600,
                max: false
            }
        };
        // Get if it exists
        var config = {};
        if (fs.existsSync(exports.configStore.path)) {
            config = JSON.parse(fs.readFileSync(exports.configStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        Object.keys(exports.configStore.store).forEach(function (key) {
            if (config[key] !== undefined)
                exports.configStore.store[key] = config[key];
        });
    },
    get: function (event) {
        exports.configStore.load();
        event.returnValue = exports.configStore.store;
    },
    set: function (event, config) {
        exports.configStore.store = config;
        exports.configStore.save();
        event.returnValue = null;
    }
};
//# sourceMappingURL=config.js.map