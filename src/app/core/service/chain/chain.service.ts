import { Injectable, signal } from '@angular/core';

import { getGroupPath } from '@model/DataGroup/children/getGroupPath';
import { Task } from '@model/Task';
import { setCompletion } from '@model/Task/completion/setCompletion';
import { ConfigStoreService } from '@service/store/config-store.service';

import { ChainedGroup, ChainStart, ChainedTask, ChainHistory } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService {
    static Instance: ChainService;
    static force: boolean;

    history = signal<ChainHistory[]>([]);
    private historyDisabled?: boolean;
    historyLimit: number = 10;

    chainedTaskCount = signal<number>(0);
    chainedGroups = signal<ChainedGroup[]>([]);
    chainStart = signal<ChainStart | null>(null);

    constructor(private svcConfig: ConfigStoreService) {
        ChainService.Instance = this;
    }

    //#region------------------------------------------------------- Active Chain
    startChain({ task, fromFlag, toFlag }: ChainedTask): void {
        const path = getGroupPath(task._parent);
        path.shift();

        this.addHistory();

        this.chainStart.set({
            historyDisabled: this.historyDisabled ?? false,
            task,
            fromFlag,
            toFlag,
            path: path.join(' > ')
        });

        this.chainedGroups.set([]);
        this.chainedTaskCount.set(0);

        this.svcConfig.updated$.subscribe(() => this.setHistoryLimit());
    }

    setHistoryLimit(): void {
        this.historyLimit = this.svcConfig.get('chain-history-limit');
    }

    taskAlreadyChained(task: Task, toFlag: string): boolean {
        // Matches start task
        if(this.chainStart()?.task?.fullStorageKey === task.fullStorageKey) {
            return true;
        }

        // Matches embedded chained tasks
        return this.chainedGroups().some((chainedGroup) => {
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
        const path = getGroupPath(chained.task._parent).join(' > ');
        const chainedGroups = [...this.chainedGroups()];
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
            if(chainedTask.count === undefined) chainedTask.count = 0;
            chainedTask.count++;
        }

        // Update show prop for all chained tasks
        const show = this.chainedTaskCount() < this.svcConfig.get('chain-min-threshold');
        chainedGroups.forEach((g) => g.show = show);

        // Sort the new groupings by path
        chainedGroups.sort((a, b) => a.path.localeCompare(b.path));

        this.chainedGroups.set(chainedGroups);
        this.chainedTaskCount.set(this.chainedTaskCount() + 1);
    }

    //#endregion

    //#region------------------------------------------------------- Chain History
    addHistory(): void {
        const chainStart = this.chainStart();

        if(
            this.svcConfig.get('chain-history-limit') > this.history().length && // Chain limit won't be exceeded
            chainStart !== null && // chainStart exists
            !chainStart?.historyDisabled && // Initial task didn't disable history
            this.chainedTaskCount() // There are tasks chained
        ) {
            this.history.update((history) => {
                history.push({
                    chainStart: chainStart,
                    chainedGroups: this.chainedGroups(),
                    chainedTaskCount: this.chainedTaskCount()
                });
                return history;
            });
        }
    }

    setHistoryDisabled(historyDisabled: boolean): void {
        this.historyDisabled = historyDisabled;
    }

    undoCurrentChain(): void {
        const chainStart = this.chainStart();
        const chainedGroups = this.chainedGroups();

        if(!chainStart) {
            console.error('Error: Missing chainStart');
            return;
        }

        setCompletion(chainStart.task, chainStart.fromFlag);
        chainedGroups.forEach((chainedGroup) => {
            chainedGroup.tasks.forEach((chainedTask) => {
                setCompletion(chainedTask.task, chainedTask.fromFlag);
            });
        });

        if(this.history().length) {
            let chainToUndo: ChainHistory | undefined;
            this.history.update((history) => {
                chainToUndo = history.pop();
                return history;
            });

            if(!chainToUndo) {
                console.error('Error: Missing history');
            }
            else {
                this.chainStart.set(chainToUndo.chainStart);
                this.chainedGroups.set(chainToUndo.chainedGroups);
                this.chainedTaskCount.set(chainToUndo.chainedTaskCount);
            }
        }
        else {
            this.chainStart.set(null);
            this.chainedGroups.set([]);
            this.chainedTaskCount.set(0);
        }
    }

    //#endregion

}
