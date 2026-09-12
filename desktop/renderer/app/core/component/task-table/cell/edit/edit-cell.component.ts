import type { ElementRef } from '@angular/core';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { Textarea } from 'primeng/textarea';

import type { Task } from '@model/Task';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { NoteService } from '@service/note/note.service';
import { TableService } from '@service/table/table.service';

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
    private svcNote = inject(NoteService);
    private svcTable = inject(TableService);

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
            this.task.selected.set(false);
            return;
        }

        const target = $event.target as HTMLElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight}px`;
    }

    onTextAreaChange($event: Event): void {
        const value = ($event.target as HTMLTextAreaElement).value?.trim();

        // Prevent removing name fields
        if(this.key === 'name' && !value) return;

        if(this.svcTable.group().type === 'Custom') {
            this.svcCustomContent.editTaskMeta(this.task, this.key, value);
            this.svcTable.forceUpdate();
        }
        else if(this.svcTable.group().type === 'Note') {
            this.svcNote.editNote(this.task, value);
            this.svcTable.forceUpdate();
        }
        else {
            console.error('Editing unknown group type');
        }
    }

}
