import { net, protocol } from 'electron';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

import { GlobalStore } from '../globalStore';
import { getResourcesRoot } from '../util/getResourcesRoot';

const SCHEME = 'game' as const;
const ALLOWED_HOSTS = new Set(['assets']);

export function registerGame(): void {
    protocol.registerSchemesAsPrivileged([
        {
            scheme: SCHEME,
            privileges: {
                standard: true,
                secure: true,
            }
        }
    ]);
}

export function handleGame(): void {
    protocol.handle(SCHEME, (request) => {
        const url = new URL(request.url);

        // Block requests not made by the app
        if(getInitiatorOrigin(request) !== getExpectedOrigin()) {
            return new Response('Forbidden', { status: 403 });
        }

        // Only allow explicitly defined directories
        if(!ALLOWED_HOSTS.has(url.hostname)) {
            return new Response('Not Found', { status: 404 });
        }

        // Prevent filePath from escaping allowed host
        const filePath = getSafeRelativePath(url);
        if(!filePath) {
            return new Response('Forbidden', { status: 403 });
        }

        // Prevent directory touching (also happens on file misses)
        if(!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            return new Response('Not Found', { status: 404 });
        }

        return net.fetch(pathToFileURL(filePath).toString());
    });

    function getInitiatorOrigin(request: Request): string {
        if('initiatorOrigin' in request && request.initiatorOrigin) {
            return request.initiatorOrigin as string;
        }

        return new URL(request.referrer).origin;
    }

    function getExpectedOrigin(): string {
        const senderUrl = new URL(GlobalStore.senderUrl!);
        return senderUrl.protocol === 'file:' ? 'file://' : senderUrl.origin;
    }

    function getSafeRelativePath(url: URL): string | false {
        const resourceRoot = getResourcesRoot();
        const relativePath = decodeURIComponent(url.pathname);
        const containerPath = path.resolve(resourceRoot, url.hostname);
        const filePath = path.resolve(containerPath, '.' + relativePath);
        const relative = path.relative(containerPath, filePath);

        const isSafe = relative
            && !relative.startsWith('..')
            && !path.isAbsolute(relative);

        return isSafe ? filePath : false;
    }
}
