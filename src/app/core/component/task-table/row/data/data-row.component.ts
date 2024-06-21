import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';

@Component({
    selector: 'xiv-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent {
    @Input() dragEnabled: boolean;
    @Input() group: DataGroup;
    @Input() task: Task;
    @Input() rowIndex: number;
    @Output() completionChange = new EventEmitter<void>();

    onClick($event: MouseEvent): void {
        if(!this.parentHasClass($event.target as Element, 'noSelect')) {
            this.task.selected = !this.task.selected;
        }
    }

    //NOTE: parent chain is broken if element is inside an *ngIf or ng-container
    parentHasClass(element: Element, className: string): boolean {
        if(element.classList?.contains(className)) return true;
        if(!element.parentNode) return false;
        return this.parentHasClass(element.parentNode as Element, className);
    }

}
