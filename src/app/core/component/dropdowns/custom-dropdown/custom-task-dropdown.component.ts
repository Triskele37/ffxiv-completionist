import { Component, Input } from '@angular/core';

import { data } from '@data';
import { Task } from '@domain/Task';
import { ChainService } from '@service/chain/chain.service';
import { SearchService } from '@service/search/search.service';
import { StoreService } from '@service/store/store.service';

@Component({
    selector: 'xiv-custom-task-dropdown',
    templateUrl: './custom-task-dropdown.component.html',
    styleUrls: ['./custom-task-dropdown.component.scss']
})
export class CustomTaskDropdownComponent {
    @Input() filteredTasks: { [key: string]: Task };

    customData;
    dropdownOpen = false;
    newTaskName = '';
    newTaskNotes = '';

    mergingOpen = false;
    autoMerge = false;
    mergeFirstInChain = false;
    mergeIndex = 0;
    mergeInfo = '';
    mergeMatches = [];
    mergeTask: Task = {} as Task;
    tasksToRemove = [];

    constructor(
        private svcChain: ChainService,
        private svcSearch: SearchService,
        private svcStore: StoreService,
    ) {
        this.customData = data.getSubGroup('custom');
    }

    addCustomTask() {
        // Prevent short names
        if(this.newTaskName.length < 3) return;
        const customMeta = this.svcStore.pStore.get('custom') || {};

        // Get next safe ID
        let nextId = 0;
        while(!!customMeta[`x${nextId}`]) nextId++;
        const nextKey = `x${nextId}`;

        // Update store with custom name & notes
        this.svcStore.pStore.set(`custom.${nextKey}`, {
            name: this.newTaskName,
            notes: this.newTaskNotes
        });

        // Update data with new custom task
        this.customData.tasks[nextKey] = new Task({
            id: nextId,
            name: this.newTaskName,
            notes: this.newTaskNotes
        }, this.customData);

        // Generate new object reference so reload triggers
        this.customData.tasks = Object.assign({}, this.customData.tasks);
    }

    mergeCustomTasks() {
        // Don't merge without items
        if(this.customData.taskCount < 1) return;

        // Replace dropdown with merge window
        this.mergingOpen = true;
        this.dropdownOpen = false;

        // Search for matches and filter out the matching itself
        this.mergeTask = this.customData.getTaskAtIndex(this.mergeIndex);

        this.mergeMatches = this.svcSearch.searchData(this.mergeTask.name, true);
        this.mergeMatches = this.mergeMatches.filter(
            (m) => m.path.indexOf('Overall > Custom') === -1
        );

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

    autoMergeSingleMatches() {
        this.autoMerge = true;
        this.mergeFirstInChain = true;
        this.svcChain.clearChain();
        this.mergeCustomTasks();
    }

    confirmCurrentMerge(match) {
        const pathSegments = match.path.split(' > ');

        if(pathSegments[0] === 'Overall') {
            pathSegments.shift(); // Remove the 'Overall' step

            // Should never end up with a duplicate match in the same group
            const task = data
                .getChildGroupFromPath(pathSegments, true)
                .getTaskByID(match.tasks[0].id);

            if(task.completionFlag !== this.mergeTask.completionFlag) {
                task.changeCompletionFlag(
                    this.mergeTask.completionFlag,
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

    goToNextMerge() {
        this.mergeIndex++;

        if(this.mergeIndex > this.customData.taskCount - 1) {
            this.autoMerge = false;
            this.exitMerge();
        }
        else this.mergeCustomTasks();
    }

    exitMerge() {
        this.mergingOpen = false;
        this.mergeIndex = 0;
        this.svcStore.applyDataToStore();
        this.syncCustomStore();
    }

    removeSelectedCustomTasks() {
        for(const id in this.filteredTasks) {
            if(this.filteredTasks[id].selected) {
                this.removeCustomTask_UI(this.filteredTasks[id]);
                this.removeCustomTask_Store(this.filteredTasks[id]);
            }
        }
    }

    removeCustomTask_UI(task) {
        // Update displayed completion
        task.setCompletionFlag('N');

        // Find & Remove from data
        console.log(task.id);
        delete this.customData.tasks[`x${task.id}`];

        // Generate new object reference so reload triggers
        this.customData.tasks = Object.assign({}, this.customData.tasks);
    }

    removeCustomTask_Store(task) {
        const store = this.svcStore.pStore;
        const customTasks = store.get('custom') || {};

        // Find & Remove from store
        for(const id in customTasks) {
            if(customTasks.hasOwnProperty(id) && id === `x${task.id}`) {
                delete customTasks[id];
                break;
            }
        }

        // Update Store
        store.delete(task.fullStorageKey);
        store.set('custom', customTasks);
    }

    modalNoNo($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }

    syncCustomStore() {
        // Ugly shim to allow auto-merge not to run into locked files
        const store = this.svcStore.pStore;
        const storeData = store.data;

        this.tasksToRemove.forEach((t) => {
            // Remove task meta
            for(const id in storeData.custom || {}) {
                if(storeData.hasOwnProperty(id) && id === `x${t.id}`) {
                    delete storeData.custom[id];
                    break;
                }
            }

            // Remove task flags
            delete storeData.overall.custom[t.id];
        });

        store.set('custom', storeData.custom);
        store.set('overall.custom', storeData.overall.custom);
    }
}
