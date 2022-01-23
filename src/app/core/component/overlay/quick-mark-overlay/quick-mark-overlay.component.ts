import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@domain/Task';

type History = {
    tasks: TaskHistory[];
    from: string;
    to: string;
};

type TaskHistory = {
    task: Task;
    flag: Completion;
};

@Component({
    selector: 'xiv-quick-mark-overlay',
    templateUrl: './quick-mark-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './quick-mark-overlay.component.scss'
    ]
})
export class QuickMarkOverlayComponent {
    @Input() tasks: Task[];
    @Output() onMark = new EventEmitter<void>();
    history: History[] = [];
    isVisible: boolean = false;

    // Expose constants to template
    Y = Completion.Y;
    N = Completion.N;
    X = Completion.X;

    constructor(private svcData: DataService) {
    }

    onMouseEnter(): void {
        this.isVisible = true;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    /** Change all tasks in filteredTasks with 'from' flag to 'to' flag
     * passing null to 'from' matches selected tasks
     * */
    onChangeTaskCompletion(from: Completion, to: Completion): void {
        const history: History = { from: from || 'selected', to, tasks: [] };

        let first = true;
        this.tasks.forEach((task) => {
            if((!from && task.selected) || (from && task.completionFlag === from)) {
                history.tasks.push({
                    task,
                    flag: task.completionFlag as Completion
                });

                first = !task.changeCompletionFlag(to, first) && first;
            }
        });

        if(history.tasks.length) {
            this.onMark.emit();
            this.history.push(history);
            this.svcData.applyDataToStore();
        }
    }

    onUndoLastChange(): void {
        const history = this.history.pop();

        let first = true;
        history.tasks.forEach((changed, index) => {
            if(changed.task.completionFlag !== changed.flag) {
                first = !changed.task.changeCompletionFlag(changed.flag, first) && first;
            }
        });

        this.onMark.emit();
        this.svcData.applyDataToStore();
    }
}
