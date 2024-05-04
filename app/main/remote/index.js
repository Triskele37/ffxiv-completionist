"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asQueryString = exports.openInTeamcraft = exports.openInGarlandTools = exports.searchGarlandTools = exports.searchGamerEscape = exports.searchConsoleGamer = void 0;
var electron_1 = require("electron");
//#region------------------------------------------------------- Search External
function searchConsoleGamer(event, term) {
    var query = asQueryString(term, true);
    electron_1.shell.openExternal("https://ffxiv.consolegameswiki.com/?search=".concat(query));
    event.returnValue = null;
}
exports.searchConsoleGamer = searchConsoleGamer;
function searchGamerEscape(event, term) {
    var query = asQueryString(term, true);
    electron_1.shell.openExternal("https://ffxiv.gamerescape.com/?search=".concat(query));
    event.returnValue = null;
}
exports.searchGamerEscape = searchGamerEscape;
function searchGarlandTools(event, term) {
    var query = asQueryString(term, false);
    electron_1.shell.openExternal("https://www.garlandtools.org/db/#search/".concat(query));
    event.returnValue = null;
}
exports.searchGarlandTools = searchGarlandTools;
//#endregion
//#region------------------------------------------------------- Open External
function openInGarlandTools(event, ids, groupName) {
    var baseUrl = 'https://www.garlandtools.org/db/#group';
    var idsString = ids.map(function (id) { return "item/".concat(id); }).join('|');
    var encodedGroupName = groupName.replace(' ', '%20');
    electron_1.shell.openExternal("".concat(baseUrl, "/").concat(encodedGroupName, "{").concat(idsString, "}"));
    event.returnValue = null;
}
exports.openInGarlandTools = openInGarlandTools;
function openInTeamcraft(event, ids) {
    var baseUrl = 'https://www.ffxivteamcraft.com/import';
    var idsString = ids.map(function (id) { return "".concat(id, ",null,1"); }).join(';');
    var b64ids = Buffer.from(idsString).toString('base64');
    electron_1.shell.openExternal("".concat(baseUrl, "/").concat(b64ids));
    event.returnValue = null;
}
exports.openInTeamcraft = openInTeamcraft;
//#endregion
function asQueryString(value, spacesAsPlus) {
    var queryString = value
        .replace('…', '')
        .replace(/-/g, ' ');
    queryString = encodeURIComponent(queryString);
    if (spacesAsPlus) {
        queryString = queryString.replace(/%20/g, '+');
    }
    return queryString;
}
exports.asQueryString = asQueryString;
//# sourceMappingURL=index.js.map