import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ConfigStoreService } from '@service/store/config-store.service';
import { ChainTask, ChainStart, ChainedTasks } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService {
    static Instance;

    chainedTaskCount$ = new BehaviorSubject<number>(0);
    chainedTasks$ = new BehaviorSubject<ChainedTasks>({});
    chainStart$ = new BehaviorSubject<ChainStart>(null);

    constructor(private svcConfig: ConfigStoreService) {
        ChainService.Instance = this;
    }

    idExistsInStore(id: number, toFlag: string): boolean {
        // Matches start task
        if(this.chainStart$.value?.task?.id === id) {
            return true;
        }

        // Only instance of duplicate quest ids in the game
        if(id === 66210) return false;

        // Matches embedded chained tasks
        const chainedTasks = this.chainedTasks$.value;
        for(const path in chainedTasks) {
            if(chainedTasks.hasOwnProperty(path)) {
                const change = chainedTasks[path][`x${id}`];

                if(!!change) {
                    if(change.task.isNumericCompletion) {
                        // Allow numeric tasks to chain through if toFlag is greater
                        const fromNum = parseInt(change.fromFlag, 10);
                        const toNum = parseInt(toFlag, 10);
                        return fromNum >= toNum;
                    }

                    return true;
                }
            }
        }

        return false;
    }

    startChain({ task, fromFlag, toFlag }: ChainTask): void {
        const path = task._parent.groupPath;
        path.shift();

        this.chainStart$.next({
            task,
            fromFlag,
            toFlag,
            path: path.join(' > ')
        });
        this.chainedTasks$.next({});
        this.chainedTaskCount$.next(0);
    }

    pushChained(chained: ChainTask): void {
        const path = chained.task._parent.groupPath.join(' > ');
        const chainedTasks = this.chainedTasks$.value;

        // Init first time a group is hit
        if(!chainedTasks[path]) {
            chainedTasks[path] = {};
            Object.defineProperty(chainedTasks[path], 'show', {
                enumerable: false,
                writable: true,
                value: true
            });
        }

        // Init first time a task is hit
        const id = `x${chained.task.id}`;
        if(!chainedTasks[path][id]) {
            chainedTasks[path][id] = {
                ...chained,
                count: 1
            };
        }
        else {
            // Indicate if a task is chained through multiple times
            chainedTasks[path][id].count++;
        }

        // Update show prop for all chained tasks
        const show = this.chainedTaskCount$.value < this.svcConfig.get('chain-min-threshold');
        for(const key in chainedTasks) {
            if(chainedTasks.hasOwnProperty(key)) {
                chainedTasks[key].show = show;
            }
        }

        this.chainedTasks$.next(chainedTasks);
        this.chainedTaskCount$.next(this.chainedTaskCount$.value + 1);
    }

    clearChain(): void {
        this.chainStart$.next(null);
        this.chainedTasks$.next({});
        this.chainedTaskCount$.next(0);
    }
}
