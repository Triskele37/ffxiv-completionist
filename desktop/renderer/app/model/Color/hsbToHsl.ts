import { HSBColor, HSLColor } from 'primeng/inputcolor';

export function hsbToHsl(hsb: HSBColor): HSLColor {
    const inS = hsb.saturation / 100;
    const inB = hsb.brightness / 100;

    const outL = inB * (1 - (inS / 2));
    const outS = outL === 0 || outL === 1 ? 0 : (inB - outL) / Math.min(outL, 1 - outL);

    const hue = hsb.hue;
    const saturation = Math.round(outS * 100);
    const lightness = Math.round(outL * 100);

    return new HSLColor(hue, saturation, lightness);
}
