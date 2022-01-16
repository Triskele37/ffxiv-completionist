import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss']
})
export class CompleteCellComponent {
    @Input() task: Task;
    @Input() flag: Completion;
    @Output() onChange = new EventEmitter<void>();

    constructor(private svcData: DataService) {
    }

    onTaskCompleteClick() {
        const flag = this.task.completionFlag === Completion.Y ? Completion.N : Completion.Y;
        this.task.changeCompletionFlag(flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event) {
        $event.preventDefault();

        const flag = this.task.completionFlag === Completion.X ? Completion.N : Completion.X;
        this.task.setCompletionFlag(flag);
        this.changeCompletion();
    }

    changeCompletion() {
        this.svcData.applyDataToStore();
        this.onChange.emit();
    }
}
