import { Component, Input, inject } from '@angular/core';

import { Completion } from '@constant';
import { ChainService } from '@service/chain/chain.service';
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
    private svcChain = inject(ChainService);
    private svcData = inject(DataService);
    private svcMark = inject(MarkService);
    private svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input() rowSpan?: number;

    onTaskCompleteClick(): void {
        const flag = this.task.completionFlag$() === Completion.Y ? Completion.N : Completion.Y;
        this.svcChain.current.changeCompletion(this.task, flag, true);
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
