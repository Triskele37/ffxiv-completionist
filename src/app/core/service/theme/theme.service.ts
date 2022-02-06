import { Injectable } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    root;

    constructor(private svcConfig: ConfigStoreService) {
        this.root = document.querySelector(':root');

        this.setPrimaryColor(this.svcConfig.get('theme.primary-color'));
        this.setPrimaryText(this.svcConfig.get('theme.primary-text'));
        this.setFontFamily(this.svcConfig.get('theme.font-family'));
    }

    getStyle(varKey: string): string {
        return getComputedStyle(this.root).getPropertyValue(varKey).trim();
    }

    setStyle(varKey: string, value: string): void {
        this.root.style.setProperty(varKey, value);
    }

    //#region------------------------------------------------------- Primary Color
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
    setPrimaryText(hex: string) {
        this.setStyle('--primary-color-text', hex);
        this.svcConfig.set('theme.primary-text', hex);
    }

    //#endregion

    //#region------------------------------------------------------- Font
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
