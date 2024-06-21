import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';
import { setCompletion } from '@model/Task/completion/setCompletion';

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
        changeCompletion(this.task, flag, true);
        this.changeCompletion();
    }

    onExcludeTaskClick($event: MouseEvent): void {
        $event.preventDefault();

        const flag = this.task.completionFlag === Completion.X ? Completion.N : Completion.X;
        setCompletion(this.task, flag);
        this.changeCompletion();
    }

    changeCompletion(): void {
        this.svcData.applyDataToStore();
        this.onChange.emit();
    }

}
