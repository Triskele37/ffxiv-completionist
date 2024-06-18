import { Completion } from '@constant';
import { Globals } from '@constant/Global';
import { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';

import { Task } from './';

export function createTask(json: any, parent: DataGroup): Task {
    // Map all properties from json to this class
    const task = {
        ...json,
        xivDataType: 'Task',
        _parent: parent,
    };

    task.contentLink = getContentLink(task);
    task.storageKey = `${task.id ?? -1}`;
    task.fullStorageKey = `${parent.fullStorageKey}.${task.storageKey}`;

    // Convert lang keys to app keys (combine if app key exists)
    flattenLangKeys(task);

    // Inherit properties from parent group if not explicitly defined on task json
    inheritFromParent(task, 'defaultCompletion');
    inheritFromParent(task, 'isNumericCompletion');

    // Combine properties defined on parent
    concatWithParent(task, 'cPrev');
    concatWithParent(task, 'cPrevAny');
    concatWithParent(task, 'cNext');
    concatWithParent(task, 'cSiblings');
    concatWithParent(task, 'cCombo');
    concatWithParent(task, 'cExclude');
    concatWithParent(task, 'cExclusive');

    deepConcatWithParent(task, 'cPrevAt');
    deepConcatWithParent(task, 'cSiblingsAt');
    deepConcatWithParent(task, 'cComboAt');

    //
    task.completionFlag = task.defaultCompletion ?? Completion.N;

    return task;
}

function inheritFromParent(task: Task, key: keyof Task): void {
    if(task._parent[key] && task[key] === undefined) {
        task[key] = task._parent[key];
    }
}

function concatWithParent(task: Task, key: keyof Task): void {
    const parentValue = task._parent[key];
    if(!parentValue) return;

    if(!task[key]) {
        // Exists only on parent
        task[key] = parentValue;
    }
    else {
        // Exists on both
        const concated = [];

        if(Array.isArray(parentValue)) concated.push(...parentValue);
        else concated.push(parentValue);

        if(Array.isArray(task[key])) concated.push(...task[key]);
        else concated.push(task[key]);

        task[key] = concated;
    }
}

function deepConcatWithParent(task: Task, key: keyof Task): void {
    const parentValue = task._parent[key];
    if(!parentValue) return;

    if(!task[key]) {
        // Exists only on parent
        task[key] = parentValue;
    }
    else {
        // Exists on both
        Object.keys(parentValue).forEach((at) => {
            if(!this[key][at]) this[key][at] = parentValue[at];
            else {
                const concated = [];

                if(Array.isArray(parentValue[at])) concated.push(...parentValue[at]);
                else concated.push(parentValue[at]);

                if(Array.isArray(task[key][at])) concated.push(...task[key][at]);
                else concated.push(task[key][at]);

                task[key][at] = concated;
            }
        });
    }
}

function flattenLangKeys(task: Task) {
    const lang = Globals.config.lang;
    const langEnd = `_${lang}`;

    Object.keys(task).forEach((key) => {
        if(key.endsWith(langEnd)) {
            const flatKey = key.replace(langEnd, '');

            if(task[flatKey]) {
                const curIsArr = Array.isArray(task[flatKey]);
                const langIsArr = Array.isArray(task[key]);

                if(curIsArr && langIsArr) task[flatKey] = [...task[flatKey], ...task[key]];
                else if(curIsArr && !langIsArr) task[flatKey].push(task[key]);
                else if(!curIsArr && langIsArr) task[flatKey] = [task[flatKey], ...task[key]];
                else task[flatKey] = [task[flatKey], task[key]];
            }
            else {
                task[flatKey] = task[key];
            }
        }
    });
}
