import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { Task } from '@domain/Task';
import { SaveStoreService } from '@service/store/save-store.service';

@Component({
    selector: 'xiv-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss']
})
export class CompleteCellComponent {
    @Input() task: Task;
    @Input() flag: Completion;
    @Output() onChange = new EventEmitter<void>();

    constructor(private svcStore: SaveStoreService) {
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
        this.svcStore.applyDataToStore();
        this.onChange.emit();
    }
}
