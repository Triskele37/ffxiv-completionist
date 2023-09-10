import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { Task } from '@domain/Task';
import { ChainService } from '@service/chain/chain.service';
import { Match, SearchService } from '@service/search/search.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { CustomTaskService } from '@service/custom-task/custom-task.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'xiv-custom-task-overlay',
    templateUrl: './custom-task-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './custom-task-overlay.component.scss'
    ]
})
export class CustomTaskOverlayComponent extends Overlay {
    @Input() tasks: Task[];
    isMergeVisible: boolean = false;

    newTaskName: string = '';
    newTaskNotes: string = '';

    autoMerge: boolean = false;
    mergeFirstInChain: boolean = false;
    mergeIndex: number = 0;
    mergeMatches: Match[] = [];
    mergeTask: Task = {} as Task;
    tasksToRemove: Task[] = [];

    constructor(
        private translate: TranslateService,
        private svcData: DataService,
        private svcChain: ChainService,
        private svcSearch: SearchService,
        private svcSaveStore: SaveStoreService,
        public svcCustomTask: CustomTaskService
    ) {
        super();
    }

    onMouseEnter(): void {
        if(Overlay.anyLocked) return;
        if(!this.isMergeVisible) this.isVisible = true;
    }

    //#region------------------------------------------------------- Base Events
    addCustomTask(): void {
        // Prevent short names
        if(this.newTaskName.length < 3) return;
        const customMeta = this.svcSaveStore.get('custom') || {};

        // Get next safe ID
        let nextId = 0;
        while(!!customMeta[`x${nextId}`]) nextId++;
        const nextKey = `x${nextId}`;

        // Update store with custom name & notes
        this.svcSaveStore.set(`custom.${nextKey}`, {
            name: this.newTaskName,
            notes: this.newTaskNotes
        });

        // Update data with new custom task
        this.svcCustomTask.group.tasks.push(new Task({
            id: nextId,
            name: this.newTaskName,
            notes: this.newTaskNotes
        }, this.svcCustomTask.group));

        // Generate new object reference so bindings update
        this.svcCustomTask.group.tasks = [...this.svcCustomTask.group.tasks];

        this.svcData.applyDataToStore();
    }

    mergeCustomTasks(): void {
        // Don't merge without items
        if(this.svcCustomTask.group.tasks.length < 1) return;

        // Switch displayed overlay
        this.hide();
        this.isMergeVisible = true;

        // Search for matches and filter out matching itself
        this.mergeTask = this.svcCustomTask.group.tasks[this.mergeIndex];
        this.mergeMatches = this.svcSearch
            .searchTasks(this.mergeTask.name, false, false)
            .filter((match) =>
                !match.task._parent.isBookmarkGroup &&
                !match.task._parent.isCustomGroup
            );

        if(this.autoMerge) {
            setTimeout(() => {
                if(this.mergeMatches.length === 1) {
                    this.confirmCurrentMerge(this.mergeMatches[0].task);
                }
                else {
                    this.goToNextMerge();
                }
            }, 50);
        }
        else {
            this.mergeFirstInChain = true;
        }
    }

    removeSelectedCustomTasks(): void {
        this.tasks
            .filter((t) => t.selected)
            .forEach((task) => {
                this.removeCustomTask_UI(task);
                this.removeCustomTask_Store(task);
            });
    }

    //#endregion

    //#region------------------------------------------------------- Merge Events
    autoMergeSingleMatches(): void {
        this.autoMerge = true;
        this.mergeFirstInChain = true;
        // this.svcChain.clearChain(); //TODO: still necessary with chain history?
        this.mergeCustomTasks();
    }

    goToNextMerge(): void {
        this.mergeIndex++;

        if(this.mergeIndex > this.svcCustomTask.group.tasks.length - 1) {
            this.autoMerge = false;
            this.exitMerge();
        }
        else this.mergeCustomTasks();
    }

    exitMerge(): void {
        this.isMergeVisible = false;
        this.mergeIndex = 0;
        this.svcData.applyDataToStore();
        this.syncCustomStore();
    }

    confirmCurrentMerge(match: Task): void {
        // Update the completion flag if it has changed
        if(match.completionFlag !== this.mergeTask.completionFlag) {
            this.mergeFirstInChain = !match.changeCompletion(
                this.mergeTask.completionFlag,
                this.mergeFirstInChain
            ) && this.mergeFirstInChain;
        }

        this.removeCustomTask_UI(this.mergeTask);
        this.tasksToRemove.push(this.mergeTask);

        // Offset index and goto next
        this.mergeIndex--;
        this.goToNextMerge();
    }

    modalNoNo($event): void {
        $event.preventDefault();
        $event.stopPropagation();
    }

    //#endregion

    removeCustomTask_UI(task: Task): void {
        // Update displayed completion (must change to update properly, hence Y to N)
        task.setCompletion(Completion.Y);
        task.setCompletion(Completion.N);

        // Find & Remove from data
        const index = this.svcCustomTask.group.tasks.findIndex((t) => t.id === task.id);
        this.svcCustomTask.group.tasks.splice(index, 1);

        // Generate new object reference so bindings update
        this.svcCustomTask.group.tasks = [...this.svcCustomTask.group.tasks];
    }

    removeCustomTask_Store(task: Task): void {
        const customTasks = this.svcSaveStore.get('custom') || {};

        // Find & Remove from store
        for(const id in customTasks) {
            if(customTasks.hasOwnProperty(id) && id === `x${task.id}`) {
                delete customTasks[id];
                break;
            }
        }

        // Update Store
        this.svcSaveStore.delete(task.fullStorageKey);
        this.svcSaveStore.set('custom', customTasks);
    }

    syncCustomStore(): void {
        // Ugly shim to allow auto-merge not to run into locked files
        const store = this.svcSaveStore.get();

        this.tasksToRemove.forEach((t) => {
            // Remove task meta
            for(const id in store.custom || {}) {
                if(store.custom.hasOwnProperty(id) && id === `x${t.id}`) {
                    delete store.custom[`x${t.id}`];
                    break;
                }
            }

            // Remove task flags
            delete store.overall.custom[t.id];
        });

        this.svcSaveStore.set('custom', store.custom);
        this.svcSaveStore.set('overall.custom', store.overall.custom);
    }
}
