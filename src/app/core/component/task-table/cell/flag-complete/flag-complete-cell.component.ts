import { Component, Input } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';
import { TableService } from '@service/table/table.service';
import { Task } from '@model/Task';

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
        private svcMark: MarkService,
        private svcTable: TableService,
    ) {
    }

    onTaskCompleteClick(): void {
        const flag = this.task.completionFlag$() === Completion.Y ? Completion.N : Completion.Y;
        this.svcMark.changeCompletion(this.task, flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        const flag = this.task.completionFlag$() === Completion.X ? Completion.N : Completion.X;
        this.svcMark.setCompletion(this.task, flag);
        this.changeCompletion();
    }

    changeCompletion(): void {
        this.svcData.apply.dataToStore();
        this.svcTable.filter.updateFilteredTasks();
    }
}
