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
        let R = parseInt(color.substring(1,3),16);
        let G = parseInt(color.substring(3,5),16);
        let B = parseInt(color.substring(5,7),16);

        R = Math.floor(R * (100 + percent) / 100);
        G = Math.floor(G * (100 + percent) / 100);
        B = Math.floor(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
        const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
        const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));

        return `#${RR}${GG}${BB}`;
    }

    private hexToRgb(hex: string): string {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return `${r}, ${g}, ${b}`;
    }

    //#endregion

    //#region------------------------------------------------------- Font
    setFontFamily(fontFamily: string): void {
        const includesFallback = ['serif', 'sans-serif', 'monospace']
            .some((font) => fontFamily.includes(font));

        if(!includesFallback) fontFamily += ' sans-serif';

        this.setStyle('--font-family', fontFamily);
        this.svcConfig.set('theme.font-family', fontFamily);
    }

    //#endregion
}
