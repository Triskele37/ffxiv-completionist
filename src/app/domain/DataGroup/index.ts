import { loadJson } from '@data/loader';
import { StoreService } from '@service/store/store.service';
import { GroupDefinition } from '../Definition';

import { Groupable } from './Groupable';
import { Taskable } from './Taskable';
import { Configable } from './Configable';
import { Countable } from './Countable';

import { BaseGroup } from './BaseGroup';
import { Task } from '../Task';

export class DataGroup extends Countable(Configable(Taskable(Groupable(BaseGroup)))) {
    cCombo; //TODO:

    constructor(json, parent) {
        super(json, parent);

        this.lang = parent?.lang || StoreService.eStore.get('lang');

        // Inherit things
        if(this._parent) {
            if(this._parent._columnConfig) this._columnConfig = this._parent._columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        // Apply group level properties
        if(json.defaultCompletion) this.defaultCompletion = json.defaultCompletion;

        if(json.headers) {
            this._columnConfig = Object.keys(json.headers)
                .map((key) => ({ key, ...json.headers[key] }));
        }

        this.isNumericCompletion = !!json.isNumericCompletion;

        // Chain inheritance
        if(json.cCombo) this.cCombo = json.cCombo;

        if(json.tasks) this.initializeTasks(json.tasks);

        return this;
    }

    static fromJSON(parent, path): DataGroup {
        const json = loadJson(path, parent?.lang || StoreService.eStore.get('lang'));
        return new DataGroup(json, parent);
    }

    static fromDefinition(parent: DataGroup, definition: GroupDefinition): DataGroup {
        if(definition.subGroups) {
            if(Array.isArray(definition.subGroups)) {
                const group = DataGroup.fromJSON(parent, `${definition.path}/index`);

                group.subGroups = definition.subGroups.map((subGroup) => {
                    if(typeof subGroup === 'string') {
                        return DataGroup.fromJSON(group, `${definition.path}/${subGroup}`);
                    }
                    else {
                        subGroup.path = `${definition.path}/${subGroup.path}`;
                        return DataGroup.fromDefinition(group, subGroup);
                    }
                });

                return group;
            }
            else {
                return definition.subGroups(parent, definition.path);
            }
        }
        else {
            return DataGroup.fromJSON(parent, definition.path);
        }
    }

    initializeTasks(tasks) {
        for(const id in tasks) {
            if(tasks.hasOwnProperty(id)) {
                const taskObj = new Task(tasks[id], this);

                // Allow groups to have default flags for all child tasks
                if(!taskObj.defaultCompletion) taskObj.setCompletionFlag(this.defaultCompletion);
                // Prioritize task level defaults
                else taskObj.setCompletionFlag(taskObj.defaultCompletion);

                this.tasks[id] = taskObj;
            }
        }

        return this;
    }
}
