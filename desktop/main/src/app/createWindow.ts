import { initActions } from '../actions/initActions';
import { preloadData } from '../data/preloadData';
import { initializeWindows } from '../window';

export async function createWindow() {
    await preloadData();

    initActions();
    initializeWindows();
}
