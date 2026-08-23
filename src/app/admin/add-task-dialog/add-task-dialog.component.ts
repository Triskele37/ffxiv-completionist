import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog';

import type { DataGroup } from '@model/DataGroup';

@Component({
    selector: 'com-add-task-dialog',
    templateUrl: './add-task-dialog.component.html',
    imports: [
        Dialog
    ]
})
export class AddTaskDialogComponent {
    @Input({ required: true }) visible!: boolean;
    @Output() visibleChange = new EventEmitter<boolean>();

    @Input({ required: true }) group!: DataGroup;

    constructor() {
    }

    onHide(): void {
        this.visibleChange.emit(false);
    }
}
