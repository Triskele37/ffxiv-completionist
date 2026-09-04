import { Component, EventEmitter, Input, Output, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';

import { Completion } from '@constant';
import { ChainService } from '@service/chain/chain.service';
import { DataService } from '@service/data/data-service';
import type { Task } from '@model/Task';

import { Overlay } from '../Overlay';
import { QuickMarkFromToLabelComponent } from './quick-mark-from-to-label/quick-mark-from-to-label.component';

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
    selector: 'com-quick-mark-overlay',
    templateUrl: './quick-mark-overlay.component.html',
    imports: [
        ButtonDirective,
        TranslatePipe,

        QuickMarkFromToLabelComponent
    ],
    styleUrls: [
        '../overlay.scss',
        './quick-mark-overlay.component.scss'
    ]
})
export class QuickMarkOverlayComponent extends Overlay {
    private svcChain = inject(ChainService);
    private svcData = inject(DataService);

    @Input({ required: true }) tasks!: Task[];
    @Output() marked = new EventEmitter<void>();

    historyList = signal<History[]>([]);
    isModalVisible = signal(false);

    // Expose constants to template
    Y = Completion.Y;
    N = Completion.N;
    X = Completion.X;
    S = 'S' as const;

    /**
     * Change all tasks with 'from' flag to 'to' flag
     * passing 'selected' to 'from' matches selected tasks
     * */
    onChangeTaskCompletion(from: Completion | null, to: Completion): void {
        const history: History = { from: from || 'selected', to, tasks: [] };
        this.isModalVisible.set(true);

        setTimeout(() => {
            let firstInChain = true;

            this.tasks.forEach((task) => {
                const actualToFlag = this.getActualToFlag(task, from, to);

                if(actualToFlag !== null) {
                    history.tasks.push({
                        task,
                        flag: task.completionFlag$() as Completion
                    });

                    firstInChain = !this.svcChain.current.changeCompletion(
                        task,
                        actualToFlag,
                        firstInChain
                    ) && firstInChain;
                }
            });

            if(history.tasks.length) {
                this.marked.emit();
                this.addHistory(history);
                this.svcData.apply.dataToStore();
            }

            this.isModalVisible.set(false);
        }, 100);
    }

    onUndoLastChange(): void {
        const history = this.popHistory();
        if(!history) return;

        let first = true;
        history.tasks.forEach((changed) => {
            if(changed.task.completionFlag$() !== changed.flag) {
                first = !this.svcChain.current.changeCompletion(
                    changed.task,
                    changed.flag,
                    first
                ) && first;
            }
        });

        this.marked.emit();
        this.svcData.apply.dataToStore();
    }

    //#region------------------------------------------------------- HistoryList
    // Add a History object
    addHistory(history: History): void {
        this.historyList.update((historyList) => [...historyList, history]);
    }

    // Remove and return the last History object
    popHistory(): History | undefined {
        let history: History | undefined;
        this.historyList.update((allHistory) => {
            history = allHistory.at(-1);
            return allHistory.slice(0, -1);
        });
        return history;
    }

    //#endregion

    //#region------------------------------------------------------- Get To Flag
    // Special handling needed for numeric tasks regarding 'to' flag's value
    getActualToFlag(task: Task, from: Completion | null, to: Completion): string | null {
        if(task.isNumericCompletion) {
            if(this.numericTaskMatches(task, from)) {
                if(to === Completion.Y) return task.maxValue.toString();
                if(to === Completion.N) return '0';
                if(to === Completion.X) return Completion.X;
            }
        }
        else {
            if(!from && task.selected()) return to;
            if(from && task.completionFlag$() === from) return to;
        }

        return null;
    }

    // Determine if 'task' matches the 'from' flag's intent
    numericTaskMatches(task: Task, from: Completion | null): boolean {
        // No 'from' flag, selected task matches
        if(!from && task.selected()) return true;

        const flag = task.completionFlag$();

        // 'from' is X, task needs X to match
        if(from === Completion.X && flag === Completion.X) return true;

        // 'from' is Y, numeric flag needs to be maxValue to match
        if(from === Completion.Y && flag === task.maxValue.toString()) return true;

        // 'from' is N, numeric flag needs to NOT be maxValue
        if(from === Completion.N && flag !== task.maxValue.toString()) return true;

        // No matches
        return false;
    }

    //#endregion
}
