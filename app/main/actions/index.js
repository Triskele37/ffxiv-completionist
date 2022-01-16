"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initActions = void 0;
var onLoadJson_1 = require("./onLoadJson");
var onGetConfig_1 = require("./onGetConfig");
var onSetConfig_1 = require("./onSetConfig");
var onGetSave_1 = require("./onGetSave");
var onSetSave_1 = require("./onSetSave");
function initActions() {
    onLoadJson_1.onLoadJson();
    onGetConfig_1.onGetConfig();
    onSetConfig_1.onSetConfig();
    onGetSave_1.onGetSave();
    onSetSave_1.onSetSave();
}
exports.initActions = initActions;
//# sourceMappingURL=index.js.map