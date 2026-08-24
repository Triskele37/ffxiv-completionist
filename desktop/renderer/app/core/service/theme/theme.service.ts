import { Injectable, inject } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

import type { HSB, HSL, RGB } from './ThemeTypes';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private svcConfig = inject(ConfigStoreService);

    root: HTMLElement | null;

    // These are all loaded in via config for initial set, just assume exists
    primaryColor!: string;
    primaryTextColor!: string;
    backgroundColor!: HSL;
    textColor!: RGB;
    fontFamily!: string;
    fontSize!: number;

    completeColor!: RGB;
    incompleteColor!: RGB;
    excludedColor!: RGB;
    partialCompleteColor!: RGB;

    backgroundColorHsb!: HSB;

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

    //#region------------------------------------------------------- Primary Color
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

    static hexToRgb(hex: string): string {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    }

    //#endregion

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
        this.setStyle('--primary-color-rgb', ThemeService.hexToRgb(hex));

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
        this.setBackgroundColorFromHsl({
            h: parseInt(hslStr[0], 10),
            s: parseInt(hslStr[1], 10),
            l: parseInt(hslStr[2], 10)
        });
    }

    private updateBackgroundColor(): void {
        if(!this.backgroundColor) {
            console.error('Error: Missing backgroundColor');
            return;
        }

        const { h, s, l } = this.backgroundColor;
        this.setStyle('--bg-h', `${h}`);
        this.setStyle('--bg-s', `${s}%`);
        this.setStyle('--bg-l', `${l}%`);

        this.svcConfig.set('theme.background', `${h}, ${s}, ${l}`);
    }

    setBackgroundColorFromHsl(background: HSL): void {
        this.backgroundColor = background;
        this.backgroundColorHsb = this.hslToHsb(background);
        this.updateBackgroundColor();
    }

    setBackgroundColorFromHsb(background: HSB): void {
        this.backgroundColor = this.hsbToHsl(background);
        this.backgroundColorHsb = background;
        this.updateBackgroundColor();
    }

    hsbToHsl(hsb: HSB): HSL {
        const inS = hsb.s / 100;
        const inB = hsb.b / 100;

        const outL = inB * (1 - (inS / 2));
        const outS = outL === 0 || outL === 1 ? 0 : (inB - outL) / Math.min(outL, 1 - outL);

        return {
            h: hsb.h,
            s: Math.round(outS * 100),
            l: Math.round(outL * 100)
        };
    }

    hslToHsb(hsl: HSL): HSB {
        const inS = hsl.s / 100;
        const inL = hsl.l / 100;

        const outB = inL + inS * Math.min(inL, 1 - inL);
        const outS = outB === 0 ? 0 : 2 * (1 - (inL / outB));

        return {
            h: hsl.h,
            s: Math.round(outS * 100),
            b: Math.round(outB * 100)
        };
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

    setIncompleteColor(rgb: RGB | undefined): void {
        if(!rgb) {
            console.error('Error: Attempted to set undefined to IncompleteColor');
            return;
        }

        this.incompleteColor = rgb;
        this.setRGBStyle(rgb, 'incomplete-rgb');
    }

    loadPartialCompleteColor(): void {
        this.setPartialCompleteColor(this.loadRGBColor('partial-complete-rgb'));
    }

    setPartialCompleteColor(rgb: RGB | undefined): void {
        if(!rgb) {
            console.error('Error: Attempted to set undefined to PartialCompleteColor');
            return;
        }

        this.partialCompleteColor = rgb;
        this.setRGBStyle(rgb, 'partial-complete-rgb');
    }

    loadCompleteColor(): void {
        this.setCompleteColor(this.loadRGBColor('completed-rgb'));
    }

    setCompleteColor(rgb: RGB | undefined): void {
        if(!rgb) {
            console.error('Error: Attempted to set undefined to CompleteColor');
            return;
        }

        this.completeColor = rgb;
        this.setRGBStyle(rgb, 'completed-rgb');
    }

    loadExcludedColor(): void {
        this.setExcludedColor(this.loadRGBColor('excluded-rgb'));
    }

    setExcludedColor(rgb: RGB | undefined): void {
        if(!rgb) {
            console.error('Error: Attempted to set undefined to ExcludedColor');
            return;
        }

        this.excludedColor = rgb;
        this.setRGBStyle(rgb, 'excluded-rgb');
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
