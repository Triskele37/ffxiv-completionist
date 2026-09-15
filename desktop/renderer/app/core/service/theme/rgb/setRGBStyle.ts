import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function setRGBStyle(service: ThemeService) {
    return (
        rgb: RGBColor,
        key: string,
    ): void => {
        const rgbString = `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
        service.setStyle(`--${key}`, rgbString);
        service.svcConfig.set(`theme.${key}`, rgbString);
    };
}
