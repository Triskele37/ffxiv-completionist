import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';

import { ChainedGroup, ChainStart, ChainedTask, ChainHistory } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService {
    static Instance: ChainService;
    static force: boolean;

    private history: ChainHistory[] = [];
    private historyDisabled: boolean;

    chainedTaskCount$ = new BehaviorSubject<number>(0);
    chainedGroups$ = new BehaviorSubject<ChainedGroup[]>([]);
    chainStart$ = new BehaviorSubject<ChainStart>(null);

    constructor(private svcConfig: ConfigStoreService) {
        ChainService.Instance = this;
    }

    //#region------------------------------------------------------- Active Chain
    startChain({ task, fromFlag, toFlag }: ChainedTask): void {
        const path = task._parent.groupPath;
        path.shift();

        this.addHistory();

        this.chainStart$.next({
            historyDisabled: this.historyDisabled,
            task,
            fromFlag,
            toFlag,
            path: path.join(' > ')
        });

        this.chainedGroups$.next([]);
        this.chainedTaskCount$.next(0);
    }

    taskAlreadyChained(task: Task, toFlag: string): boolean {
        // Matches start task
        if(this.chainStart$.value?.task?.fullStorageKey === task.fullStorageKey) return true;

        // Matches embedded chained tasks
        return this.chainedGroups$.value.some((chainedGroup) => {
            const change = chainedGroup.tasks.find(
                (t) => t.task.fullStorageKey === task.fullStorageKey
            );

            if(change?.task.isNumericCompletion) {
                // Allow numeric tasks to chain through if toFlag is greater
                const fromNum = parseInt(change.fromFlag, 10);
                const toNum = parseInt(toFlag, 10);
                return fromNum >= toNum;
            }

            return !!change;
        });
    }

    pushChained(chained: ChainedTask): void {
        const path = chained.task._parent.groupPath.join(' > ');
        const chainedGroups = [...this.chainedGroups$.value];
        let chainedGroup = chainedGroups.find((g) => g.path === path);

        // Init first time a group is hit
        if(!chainedGroup) {
            chainedGroup = { path, tasks: [], show: true };
            chainedGroups.push(chainedGroup);
        }

        // Look for this task in the group
        let chainedTask = chainedGroup.tasks.find((t) => t.task.id === chained.task.id);
        if(!chainedTask) {
            // Init first time a task is hit
            chainedTask = { ...chained, count: 1 };
            chainedGroup.tasks.push(chainedTask);
        }
        else {
            // Indicate if a task is chained through multiple times
            chainedTask.count++;
        }

        // Update show prop for all chained tasks
        const show = this.chainedTaskCount$.value < this.svcConfig.get('chain-min-threshold');
        chainedGroups.forEach((g) => g.show = show);

        // Sort the new groupings by path
        chainedGroups.sort((a, b) => a.path.localeCompare(b.path));

        this.chainedGroups$.next(chainedGroups);
        this.chainedTaskCount$.next(this.chainedTaskCount$.value + 1);
    }

    //#endregion

    //#region------------------------------------------------------- Chain History
    addHistory(): void {
        if(
            this.svcConfig.get('chain-history-limit') > this.history.length && // Chain limit won't be exceeded
            !this.chainStart$.value?.historyDisabled && // Initial task didn't disable history
            this.chainedTaskCount$.value // There are tasks chained
        ) {
            this.history.push({
                chainStart: this.chainStart$.value,
                chainedGroups: this.chainedGroups$.value,
                chainedTaskCount: this.chainedTaskCount$.value
            });
        }
    }

    setHistoryDisabled(historyDisabled: boolean): void {
        this.historyDisabled = historyDisabled;
    }

    undoCurrentChain(): void {
        const chainStart = this.chainStart$.value;
        const chainedGroups = this.chainedGroups$.value;

        chainStart.task.setCompletion(chainStart.fromFlag);
        chainedGroups.forEach((chainedGroup) => {
            chainedGroup.tasks.forEach((chainedTask) => {
                chainedTask.task.setCompletion(chainedTask.fromFlag);
            });
        });

        if(this.history.length) {
            const history = this.history.pop();
            this.chainStart$.next(history.chainStart);
            this.chainedGroups$.next(history.chainedGroups);
            this.chainedTaskCount$.next(history.chainedTaskCount);
        }
        else {
            this.chainStart$.next(null);
            this.chainedGroups$.next([]);
            this.chainedTaskCount$.next(0);
        }
    }

    //#endregion

}
