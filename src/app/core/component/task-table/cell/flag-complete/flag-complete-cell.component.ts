import { Component, Input } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';
import { setCompletion } from '@model/Task/completion/setCompletion';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-flag-complete-cell',
    templateUrl: './flag-complete-cell.component.html',
    styleUrls: ['./flag-complete-cell.component.scss'],
    imports: []
})
export class FlagCompleteCellComponent {
    @Input({ required: true }) task!: Task;
    @Input() rowSpan?: number;

    constructor(
        private svcData: DataService,
        private svcTable: TableService,
    ) {
    }

    onTaskCompleteClick(): void {
        const flag = this.task.completionFlag$() === Completion.Y ? Completion.N : Completion.Y;
        changeCompletion(this.task, flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        const flag = this.task.completionFlag$() === Completion.X ? Completion.N : Completion.X;
        setCompletion(this.task, flag);
        this.changeCompletion();
    }

    changeCompletion(): void {
        this.svcData.applyDataToStore();
        this.svcTable.filter.updateFilteredTasks();
    }
}
