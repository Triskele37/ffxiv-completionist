import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    OnChanges,
    Output,
    SimpleChanges,
    HostListener,
    inject,
    ElementRef
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'com-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    imports: [
        FormsModule
    ]
})
export class SelectComponent implements OnInit, OnChanges {
    @Input({ required: true }) options!: string[];
    @Output() change = new EventEmitter<string>();
    elementRef = inject(ElementRef);

    visible: boolean = false;
    selected: string = '';
    filteredOptions: string[] = [];

    ngOnInit() {
        this.filteredOptions = this.options;
    }

    ngOnChanges(changes: SimpleChanges<SelectComponent>) {
        if(changes.options) {
            this.filteredOptions = this.options;
        }
    }

    @HostListener('window:mousedown', ['$event.target'])
    onWindowMousedown(target: HTMLElement): void {
        if(!this.elementRef.nativeElement.contains(target)) {
            this.visible = false;
        }
    }

    handleInputClick(): void {
        this.visible = !this.visible;
    }

    handleKeyUp(): void {
        this.filteredOptions = this.options.filter((option) => {
            return option.includes(this.selected);
        });
    }

    handleClick(option: string): void {
        this.selected = option;
        this.visible = false;

        if(this.options.includes(option)) {
            this.change.emit(option);
        }
    }
}
