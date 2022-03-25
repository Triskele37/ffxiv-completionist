import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Task } from '@domain/Task';

import { SaveStoreService } from '@service/store/save-store.service';
import { ThemeService } from '@service/theme/theme.service';

@Component({
    selector: 'xiv-numeric-complete-cell',
    templateUrl: './numeric-complete-cell.component.html',
    styleUrls: ['./numeric-complete-cell.component.scss']
})
export class NumericCompleteCellComponent implements OnChanges {
    @Input() task: Task;
    @Input() value: string;

    step: number;
    tooltip: string;
    percentage: string;
    gradientBackground: string;

    constructor(
        private svcStore: SaveStoreService,
        private svcTheme: ThemeService
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.task) {
            this.step = this._step;
            this.tooltip = this._tooltip;
            this.update();
        }
    }

    update(): void {
        this.percentage = this._percentage;
        this.gradientBackground = this._gradientBackground;
    }

    get _step(): number {
        return 1 / (10 ** (this.task._parent.numericDecimal ?? 0));
    }

    get _tooltip(): string {
        return `${this.task.minValue} - ${this.task.maxValue}`;
    }

    get _percentage(): string {
        const totProg = this.task.maxValue - this.task.minValue;
        let prog = parseFloat(this.value) - this.task.minValue;
        if(prog < 0) prog = 0;

        return ((prog / totProg) * 100).toFixed(2);
    }

    get _gradientBackground(): string {
        const prog = parseInt(this.value, 10) - this.task.minValue;
        const tot = this.task.maxValue - this.task.minValue;

        return this.svcTheme.rygGradient(prog / tot);
    }

    onTaskValueChange(): void {
        // Update the new value
        this.task.changeCompletionNumber(this.value, true);
        this.svcStore.set(this.task.fullStorageKey, this.task.completionFlag);

        // onBlur and rebinding value can't happen in the same tick
        setTimeout(() => {
            this.value = this.task.completionFlag;
            this.update();
        });
    }
}
