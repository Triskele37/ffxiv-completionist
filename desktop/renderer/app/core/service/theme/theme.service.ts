import { Injectable, inject } from '@angular/core';
import { HSBColor, HSLColor, RGBColor } from 'primeng/inputcolor';

import type { KeysOfType } from '@model/typeUtils';
import { ConfigStoreService } from '@service/store/config-store.service';

type RGBKeys = KeysOfType<ThemeService, RGBColor>;

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private svcConfig = inject(ConfigStoreService);

    root: HTMLElement | null;

    // These are all loaded in via config for initial set, just assume exists
    primaryColor!: string;
    primaryTextColor!: string;
    backgroundColor!: HSLColor;
    textColor!: RGBColor;
    fontFamily!: string;
    fontSize!: number;

    completeColor!: RGBColor;
    incompleteColor!: RGBColor;
    excludedColor!: RGBColor;
    partialCompleteColor!: RGBColor;

    backgroundColorHsb!: HSBColor;

    constructor() {
        this.root = document.querySelector(':root');

        this.loadPrimaryColor();
        this.loadPrimaryTextColor();
        this.loadBackgroundColor();
        this.loadTextColor();
        this.loadFontFamily();
        this.loadFontSize();

        this.loadIncompleteColor();
        this.loadPartialCompleteColor();
        this.loadCompleteColor();
        this.loadExcludedColor();
    }

    getStyle(varKey: string): string {
        if(!this.root) {
            console.error(`Error: Root nullish when retrieving style ${varKey}`);
            return '';
        }

        return getComputedStyle(this.root).getPropertyValue(varKey).trim();
    }

    setStyle(varKey: string, value: string): void {
        this.root?.style.setProperty(varKey, value);
    }

    //#region------------------------------------------------------- Converters
    static shadeColor(color: string, percent: number): string {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = Math.min(Math.floor(R * (100 + percent) / 100), 255);
        G = Math.min(Math.floor(G * (100 + percent) / 100), 255);
        B = Math.min(Math.floor(B * (100 + percent) / 100), 255);

        const RR = `0${R.toString(16)}`.slice(-2);
        const GG = `0${G.toString(16)}`.slice(-2);
        const BB = `0${B.toString(16)}`.slice(-2);

        return `#${RR}${GG}${BB}`;
    }

    hexToRgb(hex: string): [number, number, number] {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return [r, g, b];
    }

    rgbColorFromHex(hex: string): RGBColor {
        return new RGBColor(...this.hexToRgb(hex));
    }

    hsbFromHex(hex: string): HSBColor {
        const [r, g, b] = this.hexToRgb(hex);
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

    hsbToHsl(hsb: HSBColor): HSLColor {
        const inS = hsb.saturation / 100;
        const inB = hsb.brightness / 100;

        const outL = inB * (1 - (inS / 2));
        const outS = outL === 0 || outL === 1 ? 0 : (inB - outL) / Math.min(outL, 1 - outL);

        const hue = hsb.hue;
        const saturation = Math.round(outS * 100);
        const lightness = Math.round(outL * 100);

        return new HSLColor(hue, saturation, lightness);
    }

    hslToHsb(hsl: HSLColor): HSBColor {
        const inS = hsl.saturation / 100;
        const inL = hsl.lightness / 100;

        const outB = inL + inS * Math.min(inL, 1 - inL);
        const outS = outB === 0 ? 0 : 2 * (1 - (inL / outB));

        const hue = hsl.hue;
        const saturation = Math.round(outS * 100);
        const brightness = Math.round(outB * 100);

        return new HSBColor(hue, saturation, brightness);
    }

    //#endregion

    //#region------------------------------------------------------- RGB
    loadRGBColor(key: string): RGBColor {
        const rgbStr = this.svcConfig.get(`theme.${key}`).split(', ');
        const red = parseInt(rgbStr[0], 10);
        const green = parseInt(rgbStr[1], 10);
        const blue = parseInt(rgbStr[2], 10);
        return new RGBColor(red, green, blue);
    }

    setRGBColor(rgb: RGBColor, tsKey: RGBKeys, cssKey: string): void {
        if(rgb.red === undefined || rgb.green === undefined || rgb.blue === undefined) {
            console.error(`Error: Attempted to set undefined to ${tsKey}`);
            return;
        }

        this[tsKey] = rgb;
        this.setRGBStyle(rgb, cssKey);
    }

    setRGBStyle(rgb: RGBColor, key: string): void {
        const rgbString = `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
        this.setStyle(`--${key}`, rgbString);
        this.svcConfig.set(`theme.${key}`, rgbString);
    }

    //#endregion

    //#region------------------------------------------------------- Primary Color
    loadPrimaryColor(): void {
        this.setPrimaryColor(this.svcConfig.get('theme.primary-color'));
    }

    setPrimaryColor(hex: string): void {
        this.primaryColor = hex;
        const [r, g, b] = this.hexToRgb(hex);

        this.setStyle('--primary-color', hex);
        this.setStyle('--primary-color-rgb', `${r}, ${g}, ${b}`);

        this.svcConfig.set('theme.primary-color', hex);
    }

    //#endregion

    //#region------------------------------------------------------- Primary Text
    loadPrimaryTextColor(): void {
        this.setPrimaryTextColor(this.svcConfig.get('theme.primary-text'));
    }

    setPrimaryTextColor(hex: string): void {
        this.primaryTextColor = hex;

        this.setStyle('--primary-color-text', hex);
        this.svcConfig.set('theme.primary-text', hex);
    }

    //#endregion

    //#region------------------------------------------------------- Background
    loadBackgroundColor(): void {
        const hslStr = this.svcConfig.get('theme.background').split(', ');
        const hue = parseInt(hslStr[0], 10);
        const saturation = parseInt(hslStr[1], 10);
        const lightness = parseInt(hslStr[2], 10);

        this.setBackgroundColorFromHsl(new HSLColor(hue, saturation, lightness));
    }

    private updateBackgroundColor(): void {
        if(!this.backgroundColor) {
            console.error('Error: Missing backgroundColor');
            return;
        }

        const { hue, saturation, lightness } = this.backgroundColor;
        this.setStyle('--bg-h', `${hue}`);
        this.setStyle('--bg-s', `${saturation}%`);
        this.setStyle('--bg-l', `${lightness}%`);

        this.svcConfig.set('theme.background', `${hue}, ${saturation}, ${lightness}`);
    }

    setBackgroundColorFromHsl(background: HSLColor): void {
        this.backgroundColor = background;
        this.backgroundColorHsb = this.hslToHsb(background);
        this.updateBackgroundColor();
    }

    setBackgroundColorFromHsb(background: HSBColor): void {
        this.backgroundColor = this.hsbToHsl(background);
        this.backgroundColorHsb = background;
        this.updateBackgroundColor();
    }

    //#endregion

    //#region------------------------------------------------------- Text Color
    loadTextColor(): void {
        this.setTextColor(this.loadRGBColor('text-color-rgb'));
    }

    setTextColor(rgb: RGBColor): void {
        this.setRGBColor(rgb, 'textColor', 'text-color-rgb');
    }

    //#endregion

    //#region------------------------------------------------------- Font
    loadFontFamily(): void {
        this.setFontFamily(this.svcConfig.get('theme.font-family'));
    }

    setFontFamily(fontFamily: string): void {
        this.fontFamily = fontFamily;

        const includesFallback = ['serif', 'sans-serif', 'monospace']
            .some((font) => fontFamily.includes(font));

        if(!includesFallback) fontFamily += ', sans-serif';
        fontFamily = fontFamily.trim();

        this.setStyle('--font-family', fontFamily);
        this.svcConfig.set('theme.font-family', fontFamily);
    }

    loadFontSize(): void {
        this.setFontSize(this.svcConfig.get('theme.font-size'));
    }

    setFontSize(fontSize: number): void {
        this.fontSize = fontSize;

        this.setStyle('--font-size', `${fontSize}px`);
        this.svcConfig.set('theme.font-size', fontSize);
    }

    //#endregion

    //#region------------------------------------------------------- Completion
    loadIncompleteColor(): void {
        this.setIncompleteColor(this.loadRGBColor('incomplete-rgb'));
    }

    setIncompleteColor(rgb: RGBColor): void {
        this.setRGBColor(rgb, 'incompleteColor', 'incomplete-rgb');
    }

    loadPartialCompleteColor(): void {
        this.setPartialCompleteColor(this.loadRGBColor('partial-complete-rgb'));
    }

    setPartialCompleteColor(rgb: RGBColor): void {
        this.setRGBColor(rgb, 'partialCompleteColor', 'partial-complete-rgb');
    }

    loadCompleteColor(): void {
        this.setCompleteColor(this.loadRGBColor('completed-rgb'));
    }

    setCompleteColor(rgb: RGBColor): void {
        this.setRGBColor(rgb, 'completeColor', 'completed-rgb');
    }

    loadExcludedColor(): void {
        this.setExcludedColor(this.loadRGBColor('excluded-rgb'));
    }

    setExcludedColor(rgb: RGBColor): void {
        this.setRGBColor(rgb, 'excludedColor', 'excluded-rgb');
    }

    //#endregion

    //#region------------------------------------------------------- Gradient
    rygGradient(weight: number): string {
        if(
            this.incompleteColor === undefined ||
            this.partialCompleteColor === undefined ||
            this.completeColor === undefined
        ) {
            console.error(`Error: Missing colors for gradient`);
            return '';
        }

        // Red rgb Weights (100% to 0% from 0-0.5)
        const red = this.incompleteColor;
        const redWeight = weight < 0.5 ? (1 - (weight * 2)) : 0;
        const rrw = red.red * redWeight;
        const rgw = red.green * redWeight;
        const rbw = red.blue * redWeight;

        // Yellow rgb Weights  (0% to 100% from 0-0.5, 100% to 0% from 0.5-1)
        const yellow = this.partialCompleteColor;
        const yellowWeight = weight < 0.5 ? (weight * 2) : (1 - weight) * 2;
        const yrw = yellow.red * yellowWeight;
        const ygw = yellow.green * yellowWeight;
        const ybw = yellow.blue * yellowWeight;

        // Green rgb Weights (0% to 100% from 0.5-1)
        const green = this.completeColor;
        const greenWeight = weight >= 0.5 ? (weight - 0.5) * 2 : 0;

        // Make it obvious when values are close to max
        // if(greenWeight < 1) greenWeight *= 0.8;

        const grw = green.red * greenWeight;
        const ggw = green.green * greenWeight;
        const gbw = green.blue * greenWeight;

        // Combine each color
        const r = Math.round(grw + yrw + rrw);
        const g = Math.round(ggw + ygw + rgw);
        const b = Math.round(gbw + ybw + rbw);

        return `rgb(${r},${g},${b})`;
    }

    //#endregion

}
