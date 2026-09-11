import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InputText } from 'primeng/inputtext';
import { Popover } from 'primeng/popover';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { NoteService } from '@service/note/note.service';

@Component({
    selector: 'com-edit-note-action',
    templateUrl: './edit-note-action.component.html',
    styleUrls: ['./edit-note-action.component.scss', '../action.scss'],
    imports: [
        InputText,
        Popover,
        TranslatePipe,
        NgIcon,
        Tooltip,
        FormsModule,
    ]
})
export class EditNoteActionComponent {
    svcNote = inject(NoteService);

    @Input({ required: true }) task!: Task;

    note: string | undefined;

    ngOnInit() {
        this.note = this.svcNote.getNote(this.task);
    }

    editNote(): void {
        this.svcNote.editNote(this.task, this.note);
    }

}
