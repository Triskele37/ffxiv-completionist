import { Injectable } from '@angular/core';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { SaveStoreService } from '@service/store/save-store.service';

type CustomTaskMeta = {
    name: string;
    notes: string;
};

@Injectable({
    providedIn: 'root'
})
export class CustomTaskService {
    private group: DataGroup;

    constructor(
        private svcData: DataService,
        private svcSaveStore: SaveStoreService
    ) {
    }

    initializeCustomTasks(): void {
        this.group = DataGroup.fromJSON(this.svcData.data, './custom');
        this.group.isCustomGroup = true;
        this.group.draggable = true;

        // Make sure 'meta' does not reference the actual store
        const meta = {};
        const currentMeta = this.getMeta();
        Object.keys(currentMeta).forEach((key) => {
            meta[key] = {
                id: parseInt(key.substr(1), 10),
                ...currentMeta[key]
            };
        });

        this.group.initializeTasks(meta);

        // Add this group to main data after the Bookmark group
        // In the event Bookmark hasn't been added yet, Custom will be added as the first group
        const index = this.svcData.data.subGroups.findIndex((g) => g.isBookmarkGroup);
        this.svcData.data.subGroups.splice(index + 1, 0, this.group);
    }

    getMeta(): { [key: string]: CustomTaskMeta } {
        return this.svcSaveStore.get('custom') || {};
    }

}
