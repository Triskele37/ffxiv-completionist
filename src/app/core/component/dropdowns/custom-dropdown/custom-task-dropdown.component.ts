import { Component, Input } from '@angular/core';

import { Completion } from '@constant';
import { data } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ChainService } from '@service/chain/chain.service';
import { SearchService } from '@service/search/search.service';
import { MatchGroup } from '@service/search/types';
import { SaveStoreService } from '@service/store/save-store.service';

@Component({
    selector: 'xiv-custom-task-dropdown',
    templateUrl: './custom-task-dropdown.component.html',
    styleUrls: [
        '../dropdown.scss',
        './custom-task-dropdown.component.scss'
    ]
})
export class CustomTaskDropdownComponent {
    @Input() filteredTasks: { [key: string]: Task };
    isVisible: boolean = false;
    isMergeVisible: boolean = false;

    customData: DataGroup;
    newTaskName: string = '';
    newTaskNotes: string = '';

    autoMerge: boolean = false;
    mergeFirstInChain: boolean = false;
    mergeIndex: number = 0;
    mergeInfo: string = '';
    mergeMatches: MatchGroup[] = [];
    mergeTask: Task = {} as Task;
    tasksToRemove: Task[] = [];

    constructor(
        private svcChain: ChainService,
        private svcSearch: SearchService,
        private svcSaveStore: SaveStoreService,
    ) {
        this.customData = data.getSubGroup('custom');
    }

    //#region------------------------------------------------------- Common
    onMouseEnter(): void {
        if(!this.isMergeVisible) this.isVisible = true;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    //#endregion

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
        this.customData.tasks[nextKey] = new Task({
            id: nextId,
            name: this.newTaskName,
            notes: this.newTaskNotes
        }, this.customData);

        // Generate new object reference so bindings update
        this.customData.tasks = Object.assign({}, this.customData.tasks);
    }

    mergeCustomTasks(): void {
        // Don't merge without items
        if(this.customData.taskCount < 1) return;

        // Switch displayed overlay
        this.isVisible = false;
        this.isMergeVisible = true;

        // Search for matches and filter out matching itself
        this.mergeTask = this.customData.getTaskAtIndex(this.mergeIndex);
        this.mergeMatches = this.svcSearch
            .searchData(this.mergeTask.name, true)
            .filter((m) => m.path.indexOf('Overall > Custom') === -1);

        if(this.mergeMatches.length) {
            this.mergeInfo = `${this.mergeMatches.length} matches found`;
        }
        else {
            this.mergeInfo = 'No match found';
        }

        if(this.autoMerge) {
            setTimeout(() => {
                if(this.mergeMatches.length === 1) {
                    this.confirmCurrentMerge(this.mergeMatches[0]);
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
        for(const id in this.filteredTasks) {
            if(this.filteredTasks[id].selected) {
                this.removeCustomTask_UI(this.filteredTasks[id]);
                this.removeCustomTask_Store(this.filteredTasks[id]);
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- Merge Events
    autoMergeSingleMatches(): void {
        this.autoMerge = true;
        this.mergeFirstInChain = true;
        this.svcChain.clearChain();
        this.mergeCustomTasks();
    }

    goToNextMerge(): void {
        this.mergeIndex++;

        if(this.mergeIndex > this.customData.taskCount - 1) {
            this.autoMerge = false;
            this.exitMerge();
        }
        else this.mergeCustomTasks();
    }

    exitMerge(): void {
        this.isMergeVisible = false;
        this.mergeIndex = 0;
        this.svcSaveStore.applyDataToStore();
        this.syncCustomStore();
    }

    confirmCurrentMerge(match: MatchGroup): void {
        const pathSegments = match.path.split(' > ');

        if(pathSegments[0] === 'Overall') {
            pathSegments.shift(); // Remove the 'Overall' step

            // Should never end up with a duplicate match in the same group
            const task = data
                .getChildGroupFromPath(pathSegments, true)
                .getTaskById(match.tasks[0].id);

            if(task.completionFlag !== this.mergeTask.completionFlag) {
                task.changeCompletionFlag(
                    this.mergeTask.completionFlag as Completion,
                    this.mergeFirstInChain
                );
                this.mergeFirstInChain = false;
            }

            this.removeCustomTask_UI(this.mergeTask);
            this.tasksToRemove.push(this.mergeTask);

            // Offset index and goto next
            this.mergeIndex--;
            this.goToNextMerge();
        }
    }

    modalNoNo($event): void {
        $event.preventDefault();
        $event.stopPropagation();
    }

    //#endregion

    removeCustomTask_UI(task: Task): void {
        // Update displayed completion
        task.setCompletionFlag(Completion.N);

        // Find & Remove from data
        delete this.customData.tasks[`x${task.id}`];

        // Generate new object reference so bindings update
        this.customData.tasks = Object.assign({}, this.customData.tasks);
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
