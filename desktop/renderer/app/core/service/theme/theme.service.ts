import { Injectable, inject } from '@angular/core';
import { HSBColor, HSLColor, RGBColor } from 'primeng/inputcolor';

import { ConfigStoreService } from '@service/store/config-store.service';

//#region ------------------------------------------------------- Methods
import { initService } from './methods/initService';
import { getStyle } from './methods/getStyle';
import { setStyle } from './methods/setStyle';
import { loadRGBColor } from './rgb/loadRGBColor';
import { setRGBColor } from './rgb/setRGBColor';
import { setRGBStyle } from './rgb/setRGBStyle';
import { loadPrimaryColor, setPrimaryColor } from './styles/primary-color';
import { loadPrimaryTextColor, setPrimaryTextColor } from './styles/primary-color-text';
import { loadBackgroundColor, setBackgroundColorFromHsb, setBackgroundColorFromHsl, updateBackgroundColor } from './styles/background-color';
import { loadTextColor, setTextColor } from './styles/text-color';
import { loadFontFamily, setFontFamily } from './styles/font-family';
import { loadFontSize, setFontSize } from './styles/font-size';
import { loadIncompleteColor, setIncompleteColor } from './styles/incomplete-color';
import { loadPartialCompleteColor, setPartialCompleteColor } from './styles/partial-complete-color';
import { loadCompleteColor, setCompleteColor } from './styles/complete-color';
import { loadExcludedColor, setExcludedColor } from './styles/excluded-color';
import { completionGradient } from './styles/completion-gradient';

//#endregion

import { ThemeStyles } from './types';

@Injectable({
    providedIn: 'root'
})
export class ThemeService implements ThemeStyles {
    svcConfig = inject(ConfigStoreService);

    root: HTMLElement | null = document.querySelector(':root');

    //#region ---------------------- Theme Styles
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

    //#endregion

    constructor() {
        initService(this)();
    }

    get getStyle() { return getStyle(this); }
    get setStyle() { return setStyle(this); }

    //#region------------------------------------------------------- RGB
    get loadRGBColor() { return loadRGBColor(this); }
    get setRGBColor() { return setRGBColor(this); }
    get setRGBStyle() { return setRGBStyle(this); }

    //#endregion

    //#region------------------------------------------------------- Primary
    get loadPrimaryColor() { return loadPrimaryColor(this); }
    get setPrimaryColor() { return setPrimaryColor(this); }
    get loadPrimaryTextColor() { return loadPrimaryTextColor(this); }
    get setPrimaryTextColor() { return setPrimaryTextColor(this); }

    //#endregion

    //#region------------------------------------------------------- Background
    get loadBackgroundColor() { return loadBackgroundColor(this); }
    get setBackgroundColorFromHsl() { return setBackgroundColorFromHsl(this); }
    get setBackgroundColorFromHsb() { return setBackgroundColorFromHsb(this); }
    get updateBackgroundColor() { return updateBackgroundColor(this); }
    get loadTextColor() { return loadTextColor(this); }
    get setTextColor() { return setTextColor(this); }

    //#endregion

    //#region------------------------------------------------------- Font
    get loadFontFamily() { return loadFontFamily(this); }
    get setFontFamily() { return setFontFamily(this); }
    get loadFontSize() { return loadFontSize(this); }
    get setFontSize() { return setFontSize(this); }

    //#endregion

    //#region------------------------------------------------------- Completion
    get loadIncompleteColor() { return loadIncompleteColor(this); }
    get setIncompleteColor() { return setIncompleteColor(this); }
    get loadPartialCompleteColor() { return loadPartialCompleteColor(this); }
    get setPartialCompleteColor() { return setPartialCompleteColor(this); }
    get loadCompleteColor() { return loadCompleteColor(this); }
    get setCompleteColor() { return setCompleteColor(this); }
    get loadExcludedColor() { return loadExcludedColor(this); }
    get setExcludedColor() { return setExcludedColor(this); }
    get completionGradient() { return completionGradient(this); }

    //#endregion

}
