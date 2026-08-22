import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { Tooltip } from 'primeng/tooltip';

import { Completion } from '@constant';
import { MarkService } from '@service/mark/mark.service';
import { DataService } from '@service/data/data-service';
import { TableService } from '@service/table/table.service';
import { Task } from '@model/Task';
import { AsStringPipe } from '@pipe/asString.pipe';
import { GradientPipe } from '@pipe/gradient.pipe';
import { PercentagePipe } from '@pipe/percentage.pipe';

@Component({
    selector: 'com-numeric-complete-cell',
    templateUrl: './numeric-complete-cell.component.html',
    styleUrls: ['./numeric-complete-cell.component.scss'],
    imports: [
        AsStringPipe,
        FormsModule,
        GradientPipe,
        InputNumber,
        PercentagePipe,
        Tooltip
    ]
})
export class NumericCompleteCellComponent implements OnChanges {
    @Input({ required: true }) task!: Task;
    @Input({ required: true }) value!: string;
    @Input() rowSpan?: number;

    Completion = Completion;

    step: number | undefined;
    tooltip: string | undefined;

    constructor(
        private svcData: DataService,
        private svcMark: MarkService,
        private svcTable: TableService,
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task) {
            this.step = this._step;
            this.tooltip = this._tooltip;
        }
    }

    get _step(): number {
        return 1 / (10 ** (this.task._parent.numericDecimal ?? 0));
    }

    get _tooltip(): string {
        return `${this.task.minValue} - ${this.task.maxValue}`;
    }

    onTaskValueChange(): void {
        // Update the new value
        this.svcMark.changeCompletion(this.task, this.value, true);
        this.svcData.apply.dataToStore();

        // onBlur and rebinding value can't happen in the same tick
        setTimeout(() => {
            this.value = this.task.completionFlag$();
            this.svcTable.filter.updateFilteredTasks();
        });
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        this.value = this.task.completionFlag$() === Completion.X ? '0' : Completion.X;
        this.onTaskValueChange();
    }

}
