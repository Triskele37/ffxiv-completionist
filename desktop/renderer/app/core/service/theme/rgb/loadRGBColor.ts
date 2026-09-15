import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadRGBColor(service: ThemeService) {
    return (
        key: string,
    ): RGBColor => {
        const rgbStr = service.svcConfig.get(`theme.${key}`).split(', ');
        const red = parseInt(rgbStr[0], 10);
        const green = parseInt(rgbStr[1], 10);
        const blue = parseInt(rgbStr[2], 10);
        return new RGBColor(red, green, blue);
    };
}
