import path from 'path';

/**
 * Get the resource root based on environment
 */
export function getResourcesRoot() {
    const isDev = process.resourcesPath.includes('electron') &&
        process.resourcesPath.includes('node_modules');

    return isDev
        ? path.join('..', 'resources') // relative to main.ts
        : path.join(process.resourcesPath, 'resources');
}
