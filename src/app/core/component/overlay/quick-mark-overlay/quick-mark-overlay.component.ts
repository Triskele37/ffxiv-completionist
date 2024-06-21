import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

import { Overlay } from '../Overlay';

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
export class QuickMarkOverlayComponent extends Overlay {
    @Input() tasks: Task[];
    @Output() onMark = new EventEmitter<void>();
    history: History[] = [];
    isModalVisible = false;

    // Expose constants to template
    Y = Completion.Y;
    N = Completion.N;
    X = Completion.X;

    constructor(private svcData: DataService) {
        super();
    }

    /** Change all tasks in filteredTasks with 'from' flag to 'to' flag
     * passing 'selected' to 'from' matches selected tasks
     * */
    onChangeTaskCompletion(from: Completion, to: Completion): void {
        const history: History = { from: from || 'selected', to, tasks: [] };
        this.isModalVisible = true;

        setTimeout(() => {
            let first = true;
            this.tasks.forEach((task) => {
                const realTo = this.getToFlag(task, from, to);
                if(realTo !== false) {
                    history.tasks.push({
                        task,
                        flag: task.completionFlag as Completion
                    });

                    first = !changeCompletion(task, realTo, first) && first;
                }
            });

            if(history.tasks.length) {
                this.onMark.emit();
                this.history.push(history);
                this.svcData.applyDataToStore();
            }

            this.isModalVisible = false;
        }, 100);
    }

    getToFlag(task: Task, from: Completion, to: Completion): string | false {
        if(task.isNumericCompletion) {
            const matches =
                (!from && task.selected) ||
                (from === Completion.Y && task.completionFlag === task.maxValue.toString()) ||
                (from === Completion.N && task.completionFlag !== task.maxValue.toString()) ||
                (from === Completion.X && task.completionFlag === Completion.X);

            if(matches) {
                if(to === Completion.Y) return task.maxValue.toString();
                if(to === Completion.N) return '0';
                if(to === Completion.X) return Completion.X;
            }
        }
        else {
            if(!from && task.selected) return to;
            if(from && task.completionFlag === from) return to;
        }

        return false;
    }

    onUndoLastChange(): void {
        const history = this.history.pop();

        let first = true;
        history.tasks.forEach((changed) => {
            if(changed.task.completionFlag !== changed.flag) {
                first = !changeCompletion(changed.task, changed.flag, first) && first;
            }
        });

        this.onMark.emit();
        this.svcData.applyDataToStore();
    }

}
