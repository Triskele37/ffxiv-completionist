import { Component, Input } from '@angular/core';

import type { Task } from '@model/Task';

import { FlagCompleteCellComponent } from '../flag-complete/flag-complete-cell.component';
import { NumericCompleteCellComponent } from '../numeric-complete/numeric-complete-cell.component';

@Component({
    selector: 'com-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss'],
    imports: [
        FlagCompleteCellComponent,
        NumericCompleteCellComponent
    ]
})
export class CompleteCellComponent {
    @Input({ required: true }) task!: Task;
    @Input() rowSpan?: number;

    constructor() {
    }
}
