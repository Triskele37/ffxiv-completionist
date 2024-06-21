import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

@Component({
    selector: 'xiv-numeric-complete-cell',
    templateUrl: './numeric-complete-cell.component.html',
    styleUrls: ['./numeric-complete-cell.component.scss']
})
export class NumericCompleteCellComponent implements OnChanges {
    @Input() task: Task;
    @Input() value: string;
    @Output() onChange = new EventEmitter<void>();

    Completion = Completion;

    step: number;
    tooltip: string;
    percentage: string;

    constructor(private svcData: DataService) {
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
        changeCompletion(this.task, this.value, true);
        this.svcData.applyDataToStore();

        // onBlur and rebinding value can't happen in the same tick
        setTimeout(() => {
            this.value = this.task.completionFlag;
            this.onChange.emit();
        });
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        this.value = this.task.completionFlag === Completion.X ? '0' : Completion.X;
        this.onTaskValueChange();
    }

}
