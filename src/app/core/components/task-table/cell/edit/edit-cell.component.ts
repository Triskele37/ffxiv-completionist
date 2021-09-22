import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Task } from '../../../../../domain/Task';

import { StoreService } from '../../../../services/store/store.service';

@Component({
    selector: 'xiv-edit-cell',
    templateUrl: './edit-cell.component.html',
    styleUrls: ['./edit-cell.component.scss']
})
export class EditCellComponent {
    @Input() taskKey = '';
    @Input() task: Task;
    @Output() deselectTask = new EventEmitter<Task>();

    @ViewChild('editInput') set editInputRef(ref: ElementRef) {
        if(ref) {
            ref.nativeElement.style.height = 'auto';
            ref.nativeElement.style.height = `${ref.nativeElement.scrollHeight}px`;

            //TODO: need to change where click is listened in TaskTableDataRow
            //TODO:  to know which input in a row to focus
            // ref.nativeElement.focus();
        }
    }

    constructor(private svcStore: StoreService) {
    }

    onResizeTextArea($event) {
        if($event.which === 13) {
            $event.preventDefault();
            this.deselectTask.emit(this.task);
            return;
        }

        $event.target.style.height = 'auto';
        $event.target.style.height = `${$event.target.scrollHeight}px`;
    }

    onEditTaskValue($event) {
        const value = $event.target.value;

        //TODO: any need to sanitize?
        if(!value) return;

        const customTask = this.svcStore.pStore.get(`custom.x${this.task.id}`);
        customTask[this.taskKey] = value;
        this.task[this.taskKey] = value;

        this.svcStore.pStore.set(`custom.x${this.task.id}`, customTask);
    }
}
