import { Component } from '@angular/core';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { sortPatchStrings } from '@model/util/sortPatchStrings';

type ExpandedRows = {
    [key: string]: boolean;
};

/**
 * View tasks by patch
 */
@Component({
    selector: 'xiv-patch-view',
    templateUrl: './patch-view.component.html',
    styleUrls: ['./patch-view.component.scss']
})
export class PatchViewComponent {
    patch: string;
    patches: string[] = [];
    tasksInPatch: Task[] = [];

    rowKeys: string[] = [];
    expandedRows: ExpandedRows = {};
    willCollapseAll: boolean = false;

    constructor(private svcData: DataService) {
        this.getPatches();
    }

    getPatches(): void {
        this.patches = [];
        this.diveForPatches(this.svcData.data);
        this.patches.sort(sortPatchStrings);
        this.patches.reverse();
        this.patches.push(' ');
    }

    diveForPatches(group: DataGroup): void {
        if(group.isBookmarkGroup || group.isCustomGroup) return;

        group.tasks?.forEach((task) => {
            if(!task.patch) return;
            if(!this.patches.includes(task.patch)) {
                this.patches.push(task.patch);
            }
        });

        group.subGroups?.forEach(this.diveForPatches.bind(this));
    }

    getTasksByPatch(): void {
        this.tasksInPatch = [];
        if(this.patch) this.diveForTasks(this.svcData.data);
    }

    diveForTasks(group: DataGroup): void {
        if(group.isBookmarkGroup || group.isCustomGroup) return;

        group.tasks?.forEach((task) => {
            if(task.patch === this.patch || this.patch === ' ' && !task.patch) {
                this.tasksInPatch.push(task);
            }
        });

        group.subGroups?.forEach(this.diveForTasks.bind(this));
    }

    setRowsExpanded(expanded: boolean): void {
        this.rowKeys = this.tasksInPatch.map((task) => task._parent.fullStorageKey);

        // Collapsed rows must use 'null' as the falsy value
        this.expandedRows = this.rowKeys.reduce((acc, key) => {
            acc[key] = expanded ? true : null;
            return acc;
        }, {});

        this.willCollapseAll = expanded;
    }

    evaluateToggleAll($event, wasCollapse: boolean): void {
        // PrimeNG deletes the key when collapsed, add it back in as null if collapsed
        const rowKey = $event.data._parent.fullStorageKey;
        if(!this.expandedRows[rowKey]) this.expandedRows[rowKey] = null;

        const hasAnyCollapsed = this.rowKeys.some((key) => !this.expandedRows[key]);
        const hasAnyExpanded = this.rowKeys.some((key) => this.expandedRows[key]);

        if(wasCollapse) this.willCollapseAll = hasAnyExpanded;
        else this.willCollapseAll = !hasAnyCollapsed;
    }

}
