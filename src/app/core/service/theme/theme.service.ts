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

    constructor(private svcConfig: ConfigStoreService) {
        this.root = document.querySelector(':root');

        this.loadPrimaryColor();
        this.loadPrimaryTextColor();
        this.loadBackgroundColor();
        this.loadTextColor();
        this.loadFontFamily();
    }

    getStyle(varKey: string): string {
        return getComputedStyle(this.root).getPropertyValue(varKey).trim();
    }

    setStyle(varKey: string, value: string): void {
        this.root.style.setProperty(varKey, value);
    }

    //#region------------------------------------------------------- Primary Color
    loadPrimaryColor(): void {
        this.setPrimaryColor(this.svcConfig.get('theme.primary-color'));
    }

    get defaultPrimaryColor(): string {
        return '#0f4c75';
    }

    setPrimaryColor(hex: string): void {
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

    get defaultPrimaryTextColor(): string {
        return '#121212';
    }

    setPrimaryTextColor(hex: string): void {
        this.setStyle('--primary-color-text', hex);
        this.svcConfig.set('theme.primary-text', hex);
    }

    //#endregion

    //#region------------------------------------------------------- Background
    loadBackgroundColor(): void {
        this.setBackgroundColor({
            h: this.svcConfig.get('theme.bg-h'),
            s: this.svcConfig.get('theme.bg-s'),
            b: this.svcConfig.get('theme.bg-l')
        });
    }

    get defaultBackgroundColor(): HSL {
        return { h: 0, s: 0, b: 12 };
    }

    setBackgroundColor(background: HSL): void {
        this.setStyle('--bg-h', background.h.toString());
        this.setStyle('--bg-s', background.s + '%');
        this.setStyle('--bg-l', background.b + '%');

        this.svcConfig.set('theme.bg-h', background.h);
        this.svcConfig.set('theme.bg-s', background.s);
        this.svcConfig.set('theme.bg-l', background.b);
    }

    //#endregion

    //#region------------------------------------------------------- Text Color
    loadTextColor(): void {
        const textColorRgb = this.svcConfig.get('theme.text-color').split(', ');
        this.setTextColor({
            r: parseInt(textColorRgb[0], 10),
            g: parseInt(textColorRgb[1], 10),
            b: parseInt(textColorRgb[2], 10)
        });
    }

    get defaultTextColor(): RGB {
        return { r: 255, g: 255, b: 255 };
    }

    setTextColor(rgb: RGB) {
        const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
        this.setStyle('--text-color-rgb', rgbString);
        this.svcConfig.set('theme.text-color', rgbString);
    }

    //#endregion

    //#region------------------------------------------------------- Font
    loadFontFamily(): void {
        this.setFontFamily(this.svcConfig.get('theme.font-family'));
    }

    get defaultFontFamily(): string {
        return 'sans-serif';
    }

    setFontFamily(fontFamily: string): void {
        const includesFallback = ['serif', 'sans-serif', 'monospace']
            .some((font) => fontFamily.includes(font));

        if(!includesFallback) fontFamily += ', sans-serif';
        fontFamily = fontFamily.trim();

        this.setStyle('--font-family', fontFamily);
        this.svcConfig.set('theme.font-family', fontFamily);
    }

    //#endregion

}
