import { Component, Input } from '@angular/core';

import { Task } from '../../../../../domain/Task';

import { StoreService } from '../../../../services/store/store.service';

@Component({
    selector: 'xiv-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss']
})
export class CompleteCellComponent {
    @Input() task: Task;
    @Input() flag: string;

    constructor(private svcStore: StoreService) {
    }

    onTaskCompleteClick() {
        const flag = this.task.completionFlag === 'Y' ? 'N' : 'Y';
        this.task.changeCompletionFlag(flag, true);
        this.svcStore.applyDataToStore();
    }

    onExcludeTaskClick($event) {
        $event.preventDefault();

        const flag = this.task.completionFlag === 'X' ? 'N' : 'X';
        this.task.setCompletionFlag(flag);
        this.svcStore.applyDataToStore();
    }
}
