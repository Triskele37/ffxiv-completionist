import { HSBColor, HSLColor } from 'primeng/inputcolor';

export function hslToHsb(hsl: HSLColor): HSBColor {
    const inS = hsl.saturation / 100;
    const inL = hsl.lightness / 100;

    const outB = inL + inS * Math.min(inL, 1 - inL);
    const outS = outB === 0 ? 0 : 2 * (1 - (inL / outB));

    const hue = hsl.hue;
    const saturation = Math.round(outS * 100);
    const brightness = Math.round(outB * 100);

    return new HSBColor(hue, saturation, brightness);
}
