import { loadSplashWindow } from './loadSplashWindow';
import { loadMainWindow } from './loadMainWindow';
import { initEvents } from './initEvents';

export function initializeWindows(): void {
    loadSplashWindow();
    loadMainWindow();
    initEvents();
}
