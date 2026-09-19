import type { KeysOfType } from '@common/typeUtils';
import type { HSBColor, HSLColor, RGBColor } from 'primeng/inputcolor';

export interface ThemeStyles {
    primaryColor: string;
    primaryTextColor: string;
    backgroundColor: HSLColor;
    textColor: RGBColor;
    fontFamily: string;
    fontSize: number;

    completeColor: RGBColor;
    incompleteColor: RGBColor;
    excludedColor: RGBColor;
    partialCompleteColor: RGBColor;

    backgroundColorHsb: HSBColor;
}

export type RGBKeys = KeysOfType<ThemeStyles, RGBColor>;
