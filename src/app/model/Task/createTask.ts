import { signal } from '@angular/core';

import { Completion, Lang } from '@constant';
import { Globals } from '@constant/Global';
import { AtLinks, Links } from '@model/Chain/ChainLink';
import { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';

import { Task } from './';

export function createTask(json: any, parent: DataGroup): Task {
    // Map all properties from json to this class
    const task = {
        ...json,
        dataType: 'Task',
        _parent: parent,
    };

    task.storageKey = `${task.id ?? -1}`;
    task.fullStorageKey = `${parent.fullStorageKey}.${task.storageKey}`;

    // Convert lang keys to app keys (combine if app key exists)
    flattenLangKeys(task);

    // Must be below flatten lang keys
    task.contentLink = getContentLink(task);

    // Inherit properties from parent group if not explicitly defined on task json
    inheritFromParent(task, 'defaultCompletion');
    inheritFromParent(task, 'isNumericCompletion');
    inheritFromParent(task, 'cPrevAny');

    // Combine properties defined on parent
    concatWithParent(task, 'cPrev');
    concatWithParent(task, 'cNext');
    concatWithParent(task, 'cSiblings');
    concatWithParent(task, 'cCombo');
    concatWithParent(task, 'cExclude');
    concatWithParent(task, 'cExclusive');

    deepConcatWithParent(task, 'cPrevAt');
    deepConcatWithParent(task, 'cSiblingsAt');
    deepConcatWithParent(task, 'cComboAt');

    // Initialize signals
    task.completionFlag$ = signal(task.defaultCompletion ?? Completion.N);
    task.selected = signal(false);

    return task;
}

// From T, get keys K that match type V
type KeysMatching<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

type SharedKey = keyof DataGroup & keyof Task;
function inheritFromParent<K extends SharedKey>(task: Task, key: K): void {
    if(task._parent[key] !== undefined && task[key] === undefined) {
        // @ts-ignore
        task[key] = task._parent[key];
    }
}

type LinkKeys = KeysMatching<DataGroup, Links | undefined>;
function concatWithParent<K extends LinkKeys>(task: Task, key: K): void {
    const parentValue = task._parent[key];
    if(!parentValue) return;

    if(task[key] === undefined) {
        // Exists only on parent
        task[key] = parentValue;
    }
    else {
        // Exists on both
        const concated = [];

        if(Array.isArray(parentValue)) concated.push(...parentValue);
        else concated.push(parentValue);

        if(Array.isArray(task[key])) concated.push(...task[key] as any);
        else concated.push(task[key]);

        task[key] = concated;
    }
}

type AtLinkKeys = KeysMatching<DataGroup, AtLinks | undefined>;
function deepConcatWithParent<K extends AtLinkKeys>(task: Task, key: K): void {
    const parentValue = task._parent[key];
    if(!parentValue) return;

    if(task[key] === undefined) {
        // Exists only on parent
        task[key] = parentValue;
    }
    else {
        // Exists on both
        Object.keys(parentValue).forEach((at) => {
            if(!task[key]) return;

            if(!task[key][at]) task[key][at] = parentValue[at];
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
    const lang = Globals.config?.lang ?? Lang.EN;
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
