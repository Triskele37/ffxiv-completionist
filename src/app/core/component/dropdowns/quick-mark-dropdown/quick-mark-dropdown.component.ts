import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { Task, TaskMap } from '@domain/Task';
import { SaveStoreService } from '@service/store/save-store.service';

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
    selector: 'xiv-quick-mark-dropdown',
    templateUrl: './quick-mark-dropdown.component.html',
    styleUrls: [
        '../dropdown.scss',
        './quick-mark-dropdown.component.scss'
    ]
})
export class QuickMarkDropdownComponent {
    @Input() filteredTasks: TaskMap;
    @Output() onMark = new EventEmitter<void>();
    history: History[] = [];
    isVisible: boolean = false;

    // Expose constants to template
    Y = Completion.Y;
    N = Completion.N;
    X = Completion.X;

    constructor(private svcStore: SaveStoreService) {
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

        Object.keys(this.filteredTasks).forEach((id) => {
            const task = this.filteredTasks[id];

            if((!from && task.selected) || (from && task.completionFlag === from)) {
                history.tasks.push({
                    task,
                    flag: task.completionFlag as Completion
                });

                task.changeCompletionFlag(to, history.tasks.length === 1);
            }
        });

        if(history.tasks.length) {
            this.onMark.emit();
            this.history.push(history);
            this.svcStore.applyDataToStore();
        }
    }

    onUndoLastChange(): void {
        const history = this.history.pop();

        history.tasks.forEach((changed, index) => {
            if(changed.task.completionFlag !== changed.flag) {
                changed.task.changeCompletionFlag(changed.flag, index === 0);
            }
        });

        this.onMark.emit();
        this.svcStore.applyDataToStore();
    }
}
