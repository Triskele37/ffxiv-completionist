import { net, protocol } from 'electron';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

import { GlobalStore } from '../globalStore';
import { getResourcesRoot } from '../util/getResourcesRoot';

/**
 *
 * */
export function initProtocols(): void {
    protocol.registerSchemesAsPrivileged([
        {
            scheme: 'game',
            privileges: {
                standard: true,
                secure: true,
            }
        }
    ]);
}

export function applyHandlers(): void {
    const resourceRoot = getResourcesRoot();

    protocol.handle('game', (request) => {
        const url = new URL(request.url);

        // Block requests not made by the app
        const initiatorOrigin = 'initiatorOrigin' in request
            ? request.initiatorOrigin
            : new URL(request.referrer).origin;

        if(initiatorOrigin !== new URL(GlobalStore.senderUrl!).origin) {
            return new Response('Forbidden', { status: 403 });
        }

        // Only allow explicitly defined directories
        const allowedHosts = new Set(['assets']);
        if(!allowedHosts.has(url.hostname)) {
            return new Response('Not Found', { status: 404 });
        }

        // Determine paths
        const relativePath = decodeURIComponent(url.pathname);
        const containerPath = path.resolve(resourceRoot, url.hostname);
        const filePath = path.resolve(containerPath, '.' + relativePath);
        const relative = path.relative(containerPath, filePath);

        // Prevent filePath from escaping allowed host
        const isSafe = relative
            && !relative.startsWith('..')
            && !path.isAbsolute(relative);

        if(!isSafe) {
            return new Response('Forbidden', { status: 403 });
        }

        // Prevent directory touching (also happens on file misses)
        if(!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            return new Response('Not Found', { status: 404 });
        }

        return net.fetch(pathToFileURL(filePath).toString());
    });
}
