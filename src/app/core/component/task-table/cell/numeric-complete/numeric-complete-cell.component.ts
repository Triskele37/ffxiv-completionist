import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Completion } from '@constant';
import { Task } from '@domain/Task';
import { SaveStoreService } from '@service/store/save-store.service';

/*TODO: currently a sync bug if another numeric task is chained
*  in the same view, can be fixed by binding to [value] after
*  upgrading ngPrime to 13.x to replace ngModel */
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

    constructor(private svcStore: SaveStoreService) {
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
        this.task.changeCompletion(this.value, true);
        this.svcStore.set(this.task.fullStorageKey, this.task.completionFlag);

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
