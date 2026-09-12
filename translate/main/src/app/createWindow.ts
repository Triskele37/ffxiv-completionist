import { initActions } from '../actions';
import { initializeWindows } from '../window/initializeWindows';

export async function createWindow() {
    initActions();
    initializeWindows();
}
