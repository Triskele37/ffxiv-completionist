import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InputText } from 'primeng/inputtext';
import { Popover } from 'primeng/popover';
import { Tooltip } from 'primeng/tooltip';

import { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { NoteService } from '@service/note/note.service';

@Component({
    selector: 'com-edit-note-action',
    styleUrls: ['./edit-note-action.component.scss', '../../action.scss'],
    imports: [
        InputText,
        Popover,
        TranslatePipe,
        NgIcon,
        Tooltip,
        FormsModule,
    ],
    template: `
        <span>
            <ng-icon
                name="matEdit"
                class="action"
                [pTooltip]="'APP.TABLE.ROW_ACTION.EDIT_NOTE' | translate"
                tooltipPosition="top"
                (click)="op.toggle($event)"
            ></ng-icon>

            <p-popover
                #op
                styleClass="note-overlay"
            >
                <input
                    pInputText
                    [(ngModel)]="note"
                    (change)="editNote()"
                >
            </p-popover>
        </span>
    `
})
export class EditNoteActionComponent implements OnInit {
    svcNote = inject(NoteService);

    @Input() group?: DataGroup;
    @Input() task?: Task;

    note: string | undefined;

    ngOnInit() {
        this.note = this.svcNote.getNote(this.group ?? this.task);
    }

    editNote(): void {
        this.svcNote.editNote(this.group ?? this.task, this.note);
    }

}
