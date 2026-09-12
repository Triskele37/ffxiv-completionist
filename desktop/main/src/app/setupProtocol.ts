import { app, net, protocol } from 'electron';
import path from 'path';
import { pathToFileURL } from 'url';

/**
 * TODO
 * unimplemented, would help fix several pathing issues
 * */

export function initProtocols(): void {
    protocol.registerSchemesAsPrivileged([
        {
            scheme: 'app',
            privileges: {
                standard: true,
                secure: true,
            }
        }
    ]);
}

export function applyHandlers(): void {
    const distPath = path.join(app.getAppPath(), 'dist');

    protocol.handle('app', (request) => {
        const url = new URL(request.url);
        const filePath = path.join(distPath, decodeURIComponent(url.pathname));

        return net.fetch(pathToFileURL(filePath).toString());
    });
}
