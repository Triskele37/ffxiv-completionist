"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18N_PATH = void 0;
exports.compare_i18n = compare_i18n;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadJson_js_1 = require("./loadJson.js");
exports.I18N_PATH = path_1.default.join('..', 'desktop', 'renderer', 'assets', 'i18n');
function compare_i18n(event, lang1, lang2) {
    const issues = [];
    diveDirectory(exports.I18N_PATH, lang1, lang2, issues);
    event.returnValue = issues;
}
function diveDirectory(dirPath, lang1, lang2, issues) {
    const entities = fs_1.default.readdirSync(dirPath);
    for (const entity of entities) {
        const entityFullPath = path_1.default.join(dirPath, entity);
        if (fs_1.default.lstatSync(entityFullPath).isDirectory()) {
            diveDirectory(entityFullPath, lang1, lang2, issues);
        }
        else if (entity === `${lang1}.json`) {
            const lang1Path = path_1.default.join(dirPath, lang1 + '.json');
            const i18n_lang1 = (0, loadJson_js_1.loadJson)(lang1Path);
            const lang2Path = path_1.default.join(dirPath, lang2 + '.json');
            if (fs_1.default.existsSync(lang2Path)) {
                const i18n_lang2 = (0, loadJson_js_1.loadJson)(lang2Path);
                dive(i18n_lang1, i18n_lang2, dirPath.split(path_1.default.sep).pop() ?? '', issues);
            }
            else {
                console.error(`${lang2Path} does not exist`);
            }
        }
    }
}
function dive(objA, objB, fullKeyPath, issues) {
    const aIsObject = typeof objA === 'object' && objA !== null;
    const bIsObject = typeof objB === 'object' && objB !== null;
    // Value branch
    if (!aIsObject || !bIsObject) {
        if (objA === objB) {
            issues.push({
                key: fullKeyPath,
                type: 'UNTRANSLATED',
                source: objA,
                target: objB,
            });
        }
        return;
    }
    // verify values and key parity
    for (let aKey in objA) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${aKey}` : aKey;
        if (!Object.hasOwn(objB, aKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'MISSING_DATA_KEY',
                source: objA[aKey],
                target: undefined,
            });
            continue;
        }
        dive(objA[aKey], objB[aKey], newFullKeyPath, issues);
    }
    // verify b doesn't have keys a doesn't
    for (let bKey in objB) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${bKey}` : bKey;
        if (!Object.hasOwn(objA, bKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'EXTRA_DATA_KEY',
                source: undefined,
                target: objB[bKey],
            });
        }
    }
}
//# sourceMappingURL=compare_i18n.js.map