import { initActions } from '../actions';
import { preloadJson } from '../actions/preloadJson';
import { initializeWindows } from '../window';

export async function createWindow() {
    await preloadJson();

    initActions();
    initializeWindows();
}
