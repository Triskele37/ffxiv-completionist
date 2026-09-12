import { screen } from 'electron';

import { WindowConfig } from '../../../common/Config';
import { GlobalStore } from '../globalStore';
import { loadConfig } from '../config';
import { isStoredPositionValid } from './isStoredPositionValid';

export function loadWindowState() {
    if(!GlobalStore.config) loadConfig();
    if(!GlobalStore.config) return {} as WindowConfig;

    if(isStoredPositionValid(GlobalStore.config.window)) {
        return GlobalStore.config.window;
    }
    else {
        const primaryDisplay = screen.getPrimaryDisplay();

        return {
            x: primaryDisplay.workArea.x,
            y: primaryDisplay.workArea.y,
            height: primaryDisplay.workArea.height,
            width: primaryDisplay.workArea.width,
        };
    }
}
