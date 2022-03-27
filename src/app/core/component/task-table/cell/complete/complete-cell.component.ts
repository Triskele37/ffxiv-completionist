import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-complete-cell',
    templateUrl: './complete-cell.component.html',
    styleUrls: ['./complete-cell.component.scss']
})
export class CompleteCellComponent {
    @Input() task: Task;
    @Input() flag: Completion | string;
    @Output() onChange = new EventEmitter<void>();

    constructor(private svcData: DataService) {
    }

    onTaskCompleteClick(): void {
        const flag = this.task.completionFlag === Completion.Y ? Completion.N : Completion.Y;
        this.task.changeCompletion(flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        const flag = this.task.completionFlag === Completion.X ? Completion.N : Completion.X;
        this.task.setCompletion(flag);
        this.changeCompletion();
    }

    changeCompletion(): void {
        this.svcData.applyDataToStore();
        this.onChange.emit();
    }

}
