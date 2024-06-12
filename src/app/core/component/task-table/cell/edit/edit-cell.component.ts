import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Task } from '@model/Task';
import { SaveStoreService } from '@service/store/save-store.service';

@Component({
    selector: 'xiv-edit-cell',
    templateUrl: './edit-cell.component.html',
    styleUrls: ['./edit-cell.component.scss']
})
export class EditCellComponent {
    @Input() task: Task;
    @Input() key: string = '';

    shouldFocus: boolean = false;
    isFocused: boolean = false;

    @ViewChild('editInput') set editInputRef(ref: ElementRef) {
        if(ref) {
            ref.nativeElement.style.height = 'auto';
            ref.nativeElement.style.height = `${ref.nativeElement.scrollHeight}px`;

            if(this.shouldFocus) {
                this.shouldFocus = false;
                ref.nativeElement.focus();
            }
        }
    }

    constructor(private svcStore: SaveStoreService) {
    }

    onCellClick(): void {
        this.shouldFocus = true;
    }

    onTextAreaClick(): void {
        if(this.isFocused) this.task.selected = false;
        this.isFocused = true;
    }

    onTextAreaFocusOut(): void {
        this.isFocused = false;
    }

    onTextAreaKeyup($event: KeyboardEvent): void {
        if($event.key === 'Enter') {
            this.onTextAreaChange($event);
            this.task.selected = false;
            return;
        }

        const target = $event.target as HTMLElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight}px`;
    }

    onTextAreaChange($event: Event): void {
        const value = ($event.target as HTMLTextAreaElement).value?.trim();

        //TODO: any need to sanitize?
        if(!value) return;

        const customTask = this.svcStore.get(`custom.x${this.task.id}`);
        customTask[this.key] = value;
        this.task[this.key] = value;

        this.svcStore.set(`custom.x${this.task.id}`, customTask);
    }

}
