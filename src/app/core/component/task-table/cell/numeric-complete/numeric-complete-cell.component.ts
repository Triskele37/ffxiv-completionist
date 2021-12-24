import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Task } from '@domain/Task';
import { rygGradient } from '../../../../../../styles/gradients';

import { StoreService } from '@service/store/store.service';

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
    gradientBackground;

    constructor(private svcStore: StoreService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.task) {
            this.step = this._step;
            this.tooltip = this._tooltip;
            this.percentage = this._percentage;
            this.gradientBackground = this._gradientBackground;
        }
    }

    get _step() {
        return 1 / (10 ** this.task._parent.numericDecimal);
    }

    get _tooltip() {
        return `${this.task.minValue} - ${this.task.maxValue}`;
    }

    get _percentage() {
        const totProg = this.task.maxValue - this.task.minValue;
        let prog = parseFloat(this.value) - this.task.minValue;
        if(prog < 0) prog = 0;

        return ((prog / totProg) * 100).toFixed(2);
    }

    get _gradientBackground() {
        const prog = parseInt(this.value, 10) - this.task.minValue;
        const tot = this.task.maxValue - this.task.minValue;

        return rygGradient(prog / tot);
    }

    onTaskValueChange(event) {
        let newValue = parseFloat(event.target.value || this.task.minValue);
        newValue = parseFloat(newValue.toFixed(this.task._parent.numericDecimal));

        // Validate the new value
        if(newValue < this.task.minValue) newValue = this.task.minValue;
        if(newValue > this.task.maxValue) newValue = this.task.maxValue;

        // Update the new value
        this.task.changeCompletionNumber(newValue, true);
        this.svcStore.pStore.set(this.task.fullStorageKey, newValue.toString());
    }
}
