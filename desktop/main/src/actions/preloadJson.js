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
exports.JSON_CACHE = void 0;
exports.preloadJson = preloadJson;
exports.clearCache = clearCache;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * - keys like (logs.orchestrion-list.ambient)
 */
exports.JSON_CACHE = {};
/**
 * Preload all json asynchronously before the app loads to speed up init time
 * - Keep in memory (~10MB) to completely remove slowdown of file read during app run
 */
async function preloadJson() {
    const resourceRoot = getResourcesRoot();
    await diveResources(path.normalize(resourceRoot));
}
function clearCache() {
    for (let k in exports.JSON_CACHE) {
        delete exports.JSON_CACHE[k];
    }
}
/**
 * Recursively dive the resource directory for json
 */
async function diveResources(root, p = root) {
    const dir = await fs.promises.readdir(p);
    await Promise.all(dir.map(async (entity) => {
        const entityPath = path.join(p, entity);
        const lStat = await fs.promises.lstat(entityPath);
        if (lStat.isDirectory())
            await diveResources(root, entityPath);
        else if (entityPath.endsWith('.json')) {
            const file = await fs.promises.readFile(entityPath, 'utf8');
            const cacheKey = pathToKey(root, entityPath);
            try {
                exports.JSON_CACHE[cacheKey] = JSON.parse(file);
            }
            catch (e) {
                console.error(`Error Loading: ${entityPath}`);
                console.error(e);
            }
        }
    }));
}
/**
 * I am once again asking you to convert a path to an app key
 */
function pathToKey(root, p) {
    return p
        .replace(root, '') // Remove the root resource segment/s
        .replace('.json', '') // Remove the json ending
        .split(path.sep) // Split so we can join on a different character
        .filter((pp) => pp) // Remove empty pieces
        .join('.');
}
/**
 * Get the resource root based on environment
 */
function getResourcesRoot() {
    const isDev = process.resourcesPath.includes('electron') &&
        process.resourcesPath.includes('node_modules');
    return isDev
        ? path.join('..', 'resources') // relative to main.ts
        : path.join(process.resourcesPath, 'resources');
}
//# sourceMappingURL=preloadJson.js.map