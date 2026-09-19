import { registerGame, handleGame } from './handleGame';

/**
 * Register custom protocols
 * - Needs to happen before app.on('ready'
 * */
export function initProtocols(): void {
    registerGame();
}

/**
 * Apply custom protocol handlers
 * - Needs to happen after app.on('ready'
 * */
export function applyHandlers(): void {
    handleGame();
}
