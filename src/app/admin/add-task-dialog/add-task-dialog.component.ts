import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@model/DataGroup';

@Component({
    selector: 'xiv-add-task-dialog',
    templateUrl: './add-task-dialog.component.html',
    // styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent {
    @Input() visible: boolean;
    @Output() visibleChange = new EventEmitter<boolean>();

    @Input() group: DataGroup;

    constructor() {
    }

    onHide(): void {
        this.visibleChange.emit(false);
    }
}
