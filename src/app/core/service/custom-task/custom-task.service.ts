import { Injectable } from '@angular/core';

import { DataService } from '@data';
import { SaveStoreService } from '@service/store/save-store.service';
import { DataGroup } from '@domain/DataGroup';

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

    initializeCustomTasks() {
        this.group = DataGroup.fromJSON(this.svcData.data, './custom');
        this.group.isCustomGroup = true;
        this.group.draggable = true;

        const customTasks = this.svcSaveStore.store.get('custom') || {};

        // Have to temporarily keep this in until everyone is off 0.5.55
        if(!Array.isArray(customTasks)) {
            Object.keys(customTasks).forEach((key) => {
                customTasks[key].id = parseInt(key.substr(1), 10);
            });

            this.group.initializeTasks(customTasks);
        }
        else {
            let highestId = customTasks.length - 1;
            customTasks.forEach((meta) => {
                if(meta.id === undefined) meta.id = highestId++;
            });
            const fixedTasks = customTasks.reduce((acc, t) => {
                acc[`x${ t.id }`] = t;
                return acc;
            }, {});

            this.group.initializeTasks(fixedTasks);
        }

        // Add this group to main data
        this.svcData.data.subGroups.push(this.group);
    }
}
