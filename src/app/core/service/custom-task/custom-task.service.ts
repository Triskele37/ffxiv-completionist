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
    group: DataGroup;

    constructor(
        private svcData: DataService,
        private svcSaveStore: SaveStoreService
    ) {
        this.group = DataGroup.fromJSON(this.svcData.data, './custom');
        this.group.isCustomGroup = true;
        this.group.draggable = true;

        // Replace the placeholder for this group
        this.svcData.data.subGroups.set(this.group._key, this.group);
    }

    initializeCustomTasks(): void {
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
    }

    getMeta(): { [key: string]: CustomTaskMeta } {
        return this.svcSaveStore.get('custom') || {};
    }

}
