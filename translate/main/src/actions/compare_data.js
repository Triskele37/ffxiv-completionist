"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESOURCES_PATH = void 0;
exports.compareResources = compareResources;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getVerified_1 = require("./getVerified");
const loadJson_js_1 = require("./loadJson.js");
exports.RESOURCES_PATH = path_1.default.join('..', 'resources');
function compareResources(event, lang1, lang2) {
    const issues = [];
    const verified = (0, getVerified_1.getVerified)(lang2);
    diveDirectories(exports.RESOURCES_PATH, lang1, lang2, issues);
    for (const issue of issues) {
        issue.key = issue.key
            .replaceAll(`..${path_1.default.sep}`, '')
            .replaceAll(path_1.default.sep, '.');
    }
    event.returnValue = issues;
}
function diveDirectories(entityPath, lang1, lang2, issues) {
    if (fs_1.default.lstatSync(entityPath).isDirectory()) {
        fs_1.default.readdirSync(entityPath).forEach((entity) => {
            const newEntityPath = path_1.default.join(entityPath, entity);
            diveDirectories(newEntityPath, lang1, lang2, issues);
        });
    }
    else {
        compareFile(entityPath, lang1, lang2, issues);
    }
}
function compareFile(filePath, lang1, lang2, issues) {
    const file = (0, loadJson_js_1.loadJson)(filePath);
    diveFile(file, lang1, lang2, filePath, issues);
}
function diveFile(obj, lang1, lang2, fullKeyPath, issues) {
    if (typeof obj !== 'object' || obj === null)
        return;
    for (let key in obj) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;
        // Derive the opposite lang key from the current
        let otherKey;
        if (key.endsWith(`_${lang1}`))
            otherKey = makeLangBKey(key, lang1, lang2);
        else if (key.endsWith(`_${lang2}`))
            otherKey = makeLangBKey(key, lang2, lang1);
        else
            continue; // not a localized key
        if (!Object.hasOwn(obj, otherKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'MISSING_DATA_KEY',
                source: key,
                target: otherKey,
            });
            continue;
        }
        // Don't add double logs for lang1
        if (key.endsWith(`_${lang1}`))
            continue;
        if (obj[key] === obj[otherKey]) {
            //TODO - remove
            if (key.startsWith('npc'))
                continue;
            issues.push({
                key: newFullKeyPath,
                type: 'UNTRANSLATED',
                source: obj[key],
                target: obj[otherKey],
            });
        }
    }
    // Recurse into child objects
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;
            diveFile(obj[key], lang1, lang2, newFullKeyPath, issues);
        }
    }
}
function makeLangBKey(langAKey, langA, langB) {
    return `${langAKey.slice(0, -(langA.length + 1))}_${langB}`;
}
//# sourceMappingURL=compare_data.js.map