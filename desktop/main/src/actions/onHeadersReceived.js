"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHeadersReceived = void 0;
// Attaches CSP header to responses
function onHeadersReceived() {
    var csp = [
        // "style-src 'sha256-BACohOJzFZN3qDUNZppIkVEyQ3CSYMP3T3eiz9fUPP0='",
        // "script-src-elem 'sha256-BACohOJzFZN3qDUNZppIkVEyQ3CSYMP3T3eiz9fUPP0='",
        "default-src 'sha256-BACohOJzFZN3qDUNZppIkVEyQ3CSYMP3T3eiz9fUPP0='"
    ].join('; ');
    // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    //     callback({
    //         responseHeaders: {
    //             ...details.responseHeaders,
    //             'Content-Security-Policy': [csp]
    //         }
    //     });
    // });
}
exports.onHeadersReceived = onHeadersReceived;
//# sourceMappingURL=onHeadersReceived.js.map