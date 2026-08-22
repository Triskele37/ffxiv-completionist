"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStore = void 0;
const electron_1 = require("electron");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const ConfigStore_1 = require("./ConfigStore");
class PlayerStore {
    static path;
    static store;
    static queuedSave;
    //#region------------------------------------------------------- Load/Save
    static get defaultSave() {
        return {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'starting-class': '',
            'version': ''
        };
    }
    static load() {
        if (!ConfigStore_1.ConfigStore.store)
            return { data: {}, successful: false };
        const base = ConfigStore_1.ConfigStore.store['store-loc'] || electron_1.app.getPath('userData');
        const file = ConfigStore_1.ConfigStore.store['store-name'] || 'completion';
        PlayerStore.path = path.join(base, file + '.json');
        PlayerStore.store = PlayerStore.defaultSave;
        // Get if it exists
        let save = {}, successful = true;
        if (fs.existsSync(PlayerStore.path)) {
            try {
                save = JSON.parse(fs.readFileSync(PlayerStore.path, 'utf8'));
            }
            catch (e) {
                // Switch the target file to a temp so the original isn't wiped out
                const temp = file + '.temp';
                PlayerStore.path = path.join(base, temp + '.json');
                ConfigStore_1.ConfigStore.store['store-name'] = temp;
                ConfigStore_1.ConfigStore.save();
                successful = false;
            }
        }
        // Overwrite with defined properties matching default keys
        Object.keys(PlayerStore.store).forEach((key) => {
            if (save[key] !== undefined)
                PlayerStore.store[key] = save[key];
        });
        return { data: PlayerStore.store, successful };
    }
    static save() {
        // In the event a queuedSave exists and another save was called
        // trash the queuedSave so it doesn't overwrite the new store
        if (PlayerStore.queuedSave)
            clearTimeout(PlayerStore.queuedSave);
        try {
            fs.writeFileSync(PlayerStore.path, JSON.stringify(PlayerStore.store, null, 4));
        }
        catch (e) {
            // Retry save if the file was locked
            if (e.code === 'EBUSY') {
                PlayerStore.queuedSave = setTimeout(() => PlayerStore.save(), 1000);
            }
        }
    }
    //#endregion
    //#region------------------------------------------------------- App Methods
    static get(event) {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        event.returnValue = PlayerStore.load();
    }
    static set(event, newSave) {
        PlayerStore.store = newSave;
        PlayerStore.save();
        event.returnValue = null;
    }
    //#endregion
    //#region------------------------------------------------------- Backup Utils
    static open(event) {
        if (ConfigStore_1.ConfigStore.store)
            electron_1.shell.openPath(ConfigStore_1.ConfigStore.store['store-loc']);
        event.returnValue = null;
    }
    static backup(event) {
        if (!ConfigStore_1.ConfigStore.store) {
            event.returnValue = null;
            return;
        }
        const fileName = `${ConfigStore_1.ConfigStore.store['store-name']}-${PlayerStore.store.version}-backup.json`;
        const result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore_1.ConfigStore.store['store-loc'], fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(PlayerStore.store, null, 4));
        }
        event.returnValue = null;
    }
    static loadBackup(event) {
        if (!ConfigStore_1.ConfigStore.store) {
            event.returnValue = false;
            return;
        }
        const result = electron_1.dialog.showOpenDialogSync({
            defaultPath: ConfigStore_1.ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result?.[0]) {
            PlayerStore.set({}, JSON.parse(fs.readFileSync(result[0], 'utf8')));
            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }
}
exports.PlayerStore = PlayerStore;
//# sourceMappingURL=PlayerStore.js.map