import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@domain/Task';
import { StoreService } from '@service/store/store.service';

type Flag = 'Y' | 'N' | 'X';

@Component({
    selector: 'xiv-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss']
})
export class CompleteCellComponent {
    @Input() task: Task;
    @Input() flag: Flag;
    @Output() onChange = new EventEmitter<void>();

    constructor(private svcStore: StoreService) {
    }

    onTaskCompleteClick() {
        const flag = this.task.completionFlag === 'Y' ? 'N' : 'Y';
        this.task.changeCompletionFlag(flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event) {
        $event.preventDefault();

        const flag = this.task.completionFlag === 'X' ? 'N' : 'X';
        this.task.setCompletionFlag(flag);
        this.changeCompletion();
    }

    changeCompletion() {
        this.svcStore.applyDataToStore();
        this.onChange.emit();
    }
}
