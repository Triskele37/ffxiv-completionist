import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    InputColor,
    InputColorInput,
    InputColorSwatch,
    InputColorSwatchBackground,
    InputColorTransparencyGrid,
    InputColorArea,
    InputColorAreaBackground,
    InputColorAreaHandle,
    InputColorSlider,
    InputColorSliderTrack,
    InputColorSliderHandle,
    ColorInstance,
    ColorSpace,
    HSBColor,
    HSLColor,
    RGBColor,
} from 'primeng/inputcolor';
import { Popover } from 'primeng/popover';

@Component({
    selector: 'com-color-picker',
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.scss'],
    imports: [
        FormsModule,
        InputColor,
        InputColorSwatch,
        InputColorSwatchBackground,
        InputColorTransparencyGrid,
        InputColorArea,
        InputColorAreaBackground,
        InputColorAreaHandle,
        InputColorSlider,
        InputColorSliderTrack,
        InputColorSliderHandle,
        Popover,
        InputColorInput
    ]
})
export class ColorPickerComponent implements OnInit {
    @Input({ required: true }) value!: string | ColorInstance;

    @Output() changeHSB = new EventEmitter<HSBColor>();
    @Output() changeHSL = new EventEmitter<HSLColor>();
    @Output() changeRGB = new EventEmitter<RGBColor>();
    @Output() changeHex = new EventEmitter<string>();

    format: ColorSpace = 'hexa';

    ngOnInit() {
        if(this.value instanceof HSBColor) this.format = 'hsba';
        else if(this.value instanceof HSLColor) this.format = 'hsla';
        else if(this.value instanceof RGBColor) this.format = 'rgba';
        else this.format = 'hexa';
    }

    onValueChange({ color }: { color: ColorInstance, originalEvent?: Event }): void {
        if(this.format === 'hsba') this.changeHSB.emit(color.toHSB());
        else if(this.format === 'hsla') this.changeHSL.emit(color.toHSL());
        else if(this.format === 'rgba') this.changeRGB.emit(color.toRGB());
        else if(this.format === 'hexa') this.changeHex.emit(color.toHex());
    }
}
