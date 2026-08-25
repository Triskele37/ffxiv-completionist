"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18N_PATH = void 0;
exports.compare_i18n = compare_i18n;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getVerified_1 = require("./getVerified");
const loadJson_js_1 = require("./loadJson.js");
const diveToProperty_1 = require("./diveToProperty");
exports.I18N_PATH = path_1.default.join('..', 'desktop', 'renderer', 'assets', 'i18n');
function compare_i18n(event, lang1, lang2) {
    const issues = [];
    const verified = (0, getVerified_1.getVerified)(lang2);
    diveDirectory(exports.I18N_PATH, lang1, lang2, issues, verified);
    event.returnValue = issues;
}
function diveDirectory(dirPath, lang1, lang2, issues, verified) {
    const entities = fs_1.default.readdirSync(dirPath);
    for (const entity of entities) {
        const entityFullPath = path_1.default.join(dirPath, entity);
        if (fs_1.default.lstatSync(entityFullPath).isDirectory()) {
            diveDirectory(entityFullPath, lang1, lang2, issues, verified);
        }
        else if (entity === `${lang1}.json`) {
            const lang1Path = path_1.default.join(dirPath, lang1 + '.json');
            const i18n_lang1 = (0, loadJson_js_1.loadJson)(lang1Path);
            const lang2Path = path_1.default.join(dirPath, lang2 + '.json');
            const basePath = dirPath
                .replace(path_1.default.dirname(exports.I18N_PATH), '')
                .replaceAll(path_1.default.sep, '.')
                .substring(1) ?? ''; // leading '.'
            if (fs_1.default.existsSync(lang2Path)) {
                const i18n_lang2 = (0, loadJson_js_1.loadJson)(lang2Path);
                dive(i18n_lang1, i18n_lang2, basePath, issues, verified);
            }
            else {
                issues.push({
                    key: basePath,
                    type: 'MISSING_FILE',
                    source: undefined,
                    target: undefined,
                });
                console.error(`${lang2Path} does not exist`);
            }
        }
    }
}
function dive(objA, objB, fullKeyPath, issues, verified) {
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
        else {
            const { obj, last } = (0, diveToProperty_1.diveToProperty)(verified, fullKeyPath) ?? {};
            if (obj && last && obj[last]?.length) {
                issues.push({
                    key: fullKeyPath,
                    type: 'STALE',
                    source: objA,
                    target: objB,
                });
            }
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
        dive(objA[aKey], objB[aKey], newFullKeyPath, issues, verified);
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