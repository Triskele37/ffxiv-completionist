import { HSBColor } from 'primeng/inputcolor';

import { hexToRgb } from './hexToRgb';

export function hsbFromHex(hex: string): HSBColor {
    const [r, g, b] = hexToRgb(hex);
    const dR = r / 255;
    const dG = g / 255;
    const dB = b / 255;

    const max = Math.max(dR, dG, dB);
    const min = Math.min(dR, dG, dB);
    const delta = max - min;

    const brightness = max * 100;
    const saturation = max === 0 ? 0 : (delta / max) * 100;
    let hue = 0;

    if(delta > 0) {
        if(max === dR) {
            hue = (((dG - dB) / delta) % 6);
        }
        else if(max === dG) {
            hue = (((dB - dR) / delta) + 2);
        }
        else {
            hue = (((dR - dG) / delta) + 4);
        }

        hue = ((hue * 60) + 360) % 360;
    }

    return new HSBColor(hue, saturation, brightness);
}
