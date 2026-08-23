import type { ElementRef} from '@angular/core';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { Textarea } from 'primeng/textarea';

import type { Task } from '@model/Task';
import { CustomContentService } from '@service/custom-content/custom-content.service';

@Component({
    selector: 'com-edit-cell',
    templateUrl: './edit-cell.component.html',
    styleUrls: ['./edit-cell.component.scss'],
    imports: [
        Textarea
    ]
})
export class EditCellComponent {
    private svcCustomContent = inject(CustomContentService);

    @Input({ required: true }) task!: Task;
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

    onCellClick(): void {
        this.shouldFocus = true;
    }

    onTextAreaClick(): void {
        if(this.isFocused) this.task.selected.set(false);
        this.isFocused = true;
    }

    onTextAreaFocusOut(): void {
        this.isFocused = false;
    }

    onTextAreaKeyup($event: KeyboardEvent): void {
        if($event.key === 'Enter') {
            this.onTextAreaChange($event);
            this.task.selected.set(false);
            return;
        }

        const target = $event.target as HTMLElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight}px`;
    }

    onTextAreaChange($event: Event): void {
        const value = ($event.target as HTMLTextAreaElement).value?.trim();
        if(!value) return;

        this.svcCustomContent.editTaskMeta(this.task, this.key, value);
    }

}
