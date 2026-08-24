"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDataChange = saveDataChange;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadJson_1 = require("./loadJson");
const prettyJson_1 = require("./prettyJson");
const compare_i18n_1 = require("./compare_i18n");
const compare_data_1 = require("./compare_data");
const diveToProperty_1 = require("./diveToProperty");
function saveDataChange(event, payload) {
    let success = false;
    if (payload.issue.key.startsWith(path_1.default.basename(compare_i18n_1.I18N_PATH))) {
        success = saveI18n(payload);
    }
    else if (payload.issue.key.startsWith(path_1.default.basename(compare_data_1.RESOURCES_PATH))) {
        success = saveResources(payload);
    }
    event.returnValue = success;
}
function saveI18n({ lang, issue, value }) {
    const segments = issue.key.split('.');
    segments.shift(); // remove i18n segment
    const base = [];
    while (segments.length) {
        const potentialPath = path_1.default.join(compare_i18n_1.I18N_PATH, ...base, segments[0]);
        if (!fs_1.default.existsSync(potentialPath) || !fs_1.default.lstatSync(potentialPath).isDirectory()) {
            break;
        }
        base.push(segments.shift());
    }
    const filePath = path_1.default.join(compare_i18n_1.I18N_PATH, base.join(path_1.default.sep), `${lang}.json`);
    const file = (0, loadJson_1.loadJson)(filePath);
    const { obj, last } = (0, diveToProperty_1.diveToProperty)(file, segments.join('.')) ?? {};
    if (!obj || !last)
        return false;
    obj[last] = value;
    fs_1.default.writeFileSync(filePath, JSON.stringify(file, null, 4));
    return true;
}
function saveResources({ lang, issue, value }) {
    const segments = issue.key.replace('.json.', '.').split('.');
    segments.shift(); // remove resources segment
    const base = [];
    while (segments.length) {
        const potentialPath = path_1.default.join(compare_data_1.RESOURCES_PATH, ...base, segments[0]);
        if (!fs_1.default.existsSync(potentialPath) || !fs_1.default.lstatSync(potentialPath).isDirectory()) {
            break;
        }
        base.push(segments.shift());
    }
    const fileName = segments.shift();
    const filePath = path_1.default.join(compare_data_1.RESOURCES_PATH, base.join(path_1.default.sep), `${fileName}.json`);
    const file = (0, loadJson_1.loadJson)(filePath);
    const { obj, last } = (0, diveToProperty_1.diveToProperty)(file, segments.join('.')) ?? {};
    if (!obj || !last)
        return false;
    obj[last] = value;
    fs_1.default.writeFileSync(filePath, (0, prettyJson_1.prettyJson)(file));
    return true;
}
//# sourceMappingURL=saveDataChange.js.map