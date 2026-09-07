import { session } from 'electron';

/**
 * Must be called after app 'ready'
 * */
export function setupCsp(): void {
    const policy = [
        "default-src 'self'",
        [
            "script-src",
            "'self'",
            "'sha256-hiWn+r3t8K/RY7p69nido90IwQwsthOxsyaXn8WrTto='", // global fix
        ].join(' '),
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:"
    ].filter(Boolean).join('; ');

    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': [policy]
            }
        });
    });
}
