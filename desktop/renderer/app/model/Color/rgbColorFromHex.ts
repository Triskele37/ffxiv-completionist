import { RGBColor } from 'primeng/inputcolor';

import { hexToRgb } from './hexToRgb';

export function rgbColorFromHex(hex: string): RGBColor {
    return new RGBColor(...hexToRgb(hex));
}
