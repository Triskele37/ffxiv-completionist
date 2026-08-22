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
exports.importCustom = importCustom;
exports.exportCustom = exportCustom;
const electron_1 = require("electron");
const fs = __importStar(require("fs"));
function importCustom(event) {
    const results = electron_1.dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    if (results?.[0]) {
        try {
            const json = JSON.parse(fs.readFileSync(results[0], 'utf8'));
            event.returnValue = isValidMeta(json) ? json : false;
            return;
        }
        catch (e) {
            console.error('Unable to parse imported custom group', e);
        }
    }
    event.returnValue = null;
}
function isValidMeta(importedMeta) {
    if (!importedMeta)
        return false;
    if (typeof importedMeta !== 'object')
        return false;
    if (!importedMeta.name)
        return false;
    if (typeof importedMeta.name !== 'string')
        return false;
    for (let k in importedMeta) {
        if (k === 'name')
            continue;
        if (/^g[0-9]+$/.test(k)) {
            if (!isValidMeta(importedMeta[k]))
                return false;
            continue;
        }
        if (/^x[0-9]+$/.test(k)) {
            const { name, notes, ...rest } = importedMeta[k];
            if (typeof name !== 'string' || !name)
                return false;
            if (typeof notes !== 'string')
                return false;
            if (Object.keys(rest).length)
                return false;
            continue;
        }
        return false;
    }
    return true;
}
function exportCustom(event, customGroupMeta) {
    const fileName = `${customGroupMeta.name}.json`;
    const result = electron_1.dialog.showSaveDialogSync({
        defaultPath: fileName,
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    if (result) {
        fs.writeFileSync(result, JSON.stringify(customGroupMeta, null, 4));
    }
    event.returnValue = 'test';
}
//# sourceMappingURL=shareCustom.js.map