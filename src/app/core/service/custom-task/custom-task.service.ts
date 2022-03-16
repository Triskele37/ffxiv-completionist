import { Injectable } from '@angular/core';

import { DataService } from '@data';
import { SaveStoreService } from '@service/store/save-store.service';
import { DataGroup } from '@domain/DataGroup';

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

        // Add this group to main data
        this.svcData.data.subGroups.push(this.group);
    }

    getMeta(): { [key: string]: CustomTaskMeta } {
        return this.svcSaveStore.get('custom') || {};
    }
}
