import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';
import type { RGBKeys } from '../types';

export function setRGBColor(service: ThemeService) {
    return (
        rgb: RGBColor,
        tsKey: RGBKeys,
        cssKey: string,
    ): void => {
        if(rgb.red === undefined || rgb.green === undefined || rgb.blue === undefined) {
            console.error(`Error: Attempted to set undefined to ${tsKey}`);
            return;
        }

        service[tsKey] = rgb;
        service.setRGBStyle(rgb, cssKey);
    };
}
