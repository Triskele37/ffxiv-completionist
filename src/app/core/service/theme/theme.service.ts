import { Injectable } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

export type HSL = {
    h: number;
    s: number;
    b: number; // primeNg is weird
};

export type RGB = {
    r: number;
    g: number;
    b: number;
};

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    root;

    primaryColor: string;
    primaryTextColor: string;
    backgroundColor: HSL;
    textColor: RGB;
    fontFamily: string;

    completeColor: RGB;
    incompleteColor: RGB;
    excludedColor: RGB;
    partialCompleteColor: RGB;

    constructor(private svcConfig: ConfigStoreService) {
        this.root = document.querySelector(':root');

        this.loadPrimaryColor();
        this.loadPrimaryTextColor();
        this.loadBackgroundColor();
        this.loadTextColor();
        this.loadFontFamily();

        this.loadIncompleteColor();
        this.loadPartialCompleteColor();
        this.loadCompleteColor();
        this.loadExcludedColor();
    }

    getStyle(varKey: string): string {
        return getComputedStyle(this.root).getPropertyValue(varKey).trim();
    }

    setStyle(varKey: string, value: string): void {
        this.root.style.setProperty(varKey, value);
    }

    //#region------------------------------------------------------- RGB
    loadRGBColor(key: string): RGB {
        const rgbStr = this.svcConfig.get(`theme.${key}`).split(', ');
        return {
            r: parseInt(rgbStr[0], 10),
            g: parseInt(rgbStr[1], 10),
            b: parseInt(rgbStr[2], 10)
        };
    }

    setRGBStyle(rgb: RGB, key: string): void {
        const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
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

        this.setStyle('--primary-color', hex);
        this.setStyle('--primary-color-light', this.shadeColor(hex, 21));
        this.setStyle('--primary-color-rgb', this.hexToRgb(hex));

        this.svcConfig.set('theme.primary-color', hex);
    }

    private shadeColor(color: string, percent: number): string {
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

    private hexToRgb(hex: string): string {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return `${r}, ${g}, ${b}`;
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
        this.setBackgroundColor({
            h: parseInt(hslStr[0], 10),
            s: parseInt(hslStr[1], 10),
            b: parseInt(hslStr[2], 10)
        });
    }

    setBackgroundColor(background: HSL): void {
        this.backgroundColor = background;

        const { h, s, b } = background;
        this.setStyle('--bg-h', `${h}`);
        this.setStyle('--bg-s', `${s}%`);
        this.setStyle('--bg-l', `${b}%`);

        this.svcConfig.set('theme.background', `${h}, ${s}, ${b}`);
    }

    //#endregion

    //#region------------------------------------------------------- Text Color
    loadTextColor(): void {
        this.setTextColor(this.loadRGBColor('text-color-rgb'));
    }

    setTextColor(rgb: RGB) {
        this.textColor = rgb;
        this.setRGBStyle(rgb, 'text-color-rgb');
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

    //#endregion

    //#region------------------------------------------------------- Completion
    loadIncompleteColor(): void {
        this.setIncompleteColor(this.loadRGBColor('incomplete-rgb'));
    }

    setIncompleteColor(rgb: RGB): void {
        this.incompleteColor = rgb;
        this.setRGBStyle(rgb, 'incomplete-rgb');
    }

    loadPartialCompleteColor(): void {
        this.setPartialCompleteColor(this.loadRGBColor('partial-complete-rgb'));
    }

    setPartialCompleteColor(rgb: RGB): void {
        this.partialCompleteColor = rgb;
        this.setRGBStyle(rgb, 'partial-complete-rgb');
    }

    loadCompleteColor(): void {
        this.setCompleteColor(this.loadRGBColor('completed-rgb'));
    }

    setCompleteColor(rgb: RGB): void {
        this.completeColor = rgb;
        this.setRGBStyle(rgb, 'completed-rgb');
    }

    loadExcludedColor(): void {
        this.setExcludedColor(this.loadRGBColor('excluded-rgb'));
    }

    setExcludedColor(rgb: RGB): void {
        this.excludedColor = rgb;
        this.setRGBStyle(rgb, 'excluded-rgb');
    }

    //#endregion

    //#region------------------------------------------------------- Gradient
    rygGradient(weight: number): string {
        // Red rgb Weights (100% to 0% from 0-0.5)
        const red = this.incompleteColor;
        const redWeight = weight < 0.5 ? (1 - (weight * 2)) : 0;
        const rrw = red.r * redWeight;
        const rgw = red.g * redWeight;
        const rbw = red.b * redWeight;

        // Yellow rgb Weights  (0% to 100% from 0-0.5, 100% to 0% from 0.5-1)
        const yellow = this.partialCompleteColor;
        const yellowWeight = weight < 0.5 ? (weight * 2) : (1 - weight) * 2;
        const yrw = yellow.r * yellowWeight;
        const ygw = yellow.g * yellowWeight;
        const ybw = yellow.b * yellowWeight;

        // Green rgb Weights (0% to 100% from 0.5-1)
        const green = this.completeColor;
        const greenWeight = weight >= 0.5 ? (weight - 0.5) * 2 : 0;

        // Make it obvious when values are close to max
        // if(greenWeight < 1) greenWeight *= 0.8;

        const grw = green.r * greenWeight;
        const ggw = green.g * greenWeight;
        const gbw = green.b * greenWeight;

        // Combine each color
        const r = Math.round(grw + yrw + rrw);
        const g = Math.round(ggw + ygw + rgw);
        const b = Math.round(gbw + ybw + rbw);

        return `rgb(${r},${g},${b})`;
    }

    //#endregion

}
