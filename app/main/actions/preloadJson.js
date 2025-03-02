"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadJson = exports.JSON_CACHE = void 0;
var fs = require("fs");
var path = require("path");
/**
 * - keys like (logs.orchestrion-list.ambient)
 */
exports.JSON_CACHE = {};
/**
 * Preload all json asynchronously before the app loads to speed up init time
 * - Keep in memory (~10MB) to completely remove slowdown of file read during app run
 */
function preloadJson() {
    return __awaiter(this, void 0, void 0, function () {
        var resourceRoot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resourceRoot = getResourcesRoot();
                    console.log(resourceRoot);
                    return [4 /*yield*/, diveResources(path.normalize(resourceRoot))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.preloadJson = preloadJson;
/**
 * Recursively dive the resource directory for json
 */
function diveResources(root_1) {
    return __awaiter(this, arguments, void 0, function (root, p) {
        var dir;
        var _this = this;
        if (p === void 0) { p = root; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.promises.readdir(p)];
                case 1:
                    dir = _a.sent();
                    return [4 /*yield*/, Promise.all(dir.map(function (entity) { return __awaiter(_this, void 0, void 0, function () {
                            var entityPath, lStat, file, cacheKey;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        entityPath = path.join(p, entity);
                                        return [4 /*yield*/, fs.promises.lstat(entityPath)];
                                    case 1:
                                        lStat = _a.sent();
                                        if (!lStat.isDirectory()) return [3 /*break*/, 3];
                                        return [4 /*yield*/, diveResources(root, entityPath)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 3:
                                        if (!entityPath.endsWith('.json')) return [3 /*break*/, 5];
                                        return [4 /*yield*/, fs.promises.readFile(entityPath, 'utf8')];
                                    case 4:
                                        file = _a.sent();
                                        cacheKey = pathToKey(root, entityPath);
                                        try {
                                            exports.JSON_CACHE[cacheKey] = JSON.parse(file);
                                        }
                                        catch (e) {
                                            console.error("Error Loading: ".concat(entityPath));
                                            console.error(e);
                                        }
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * I am once again asking you to convert a path to an app key
 */
function pathToKey(root, p) {
    return p
        .replace(root, '') // Remove the root resource segment/s
        .replace('.json', '') // Remove the json ending
        .split(path.sep) // Split so we can join on a different character
        .filter(function (pp) { return pp; }) // Remove empty pieces
        .join('.');
}
/**
 * Get the resource root based on environment
 */
function getResourcesRoot() {
    if (process.env.NODE_ENV === 'production' && process.resourcesPath) {
        return "".concat(process.resourcesPath, "/resources");
    }
    else {
        return './resources';
    }
}
//# sourceMappingURL=preloadJson.js.map