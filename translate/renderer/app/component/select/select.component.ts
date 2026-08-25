import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'com-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    imports: [
    ]
})
export class SelectComponent {
    @Input({ required: true }) options!: string[];
    @Output() change = new EventEmitter<string>();

    selected: string | undefined;
    visible: boolean = false;

    handleInputClick(): void {
        this.visible = !this.visible;
    }

    handleClick(option: string): void {
        this.selected = option;
        this.visible = false;

        this.change.emit(option);
    }
}
