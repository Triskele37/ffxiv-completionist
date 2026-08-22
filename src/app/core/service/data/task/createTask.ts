import { signal } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';
import { Task } from '@model/Task';

import { DataServiceContext } from '../types';

export function createTask(
    this: DataServiceContext,
    json: any,
    parent: DataGroup,
): Task {
    // Map all properties from json to this class
    const task = {
        ...json,
        dataType: 'Task',
        _parent: parent,
    };

    task.storageKey = `${task.id ?? -1}`;
    task.fullStorageKey = `${parent.fullStorageKey}.${task.storageKey}`;

    // Convert lang keys to app keys (combine if app key exists)
    this.task.flattenLangKeys(task);

    // Must be below flatten lang keys
    task.contentLink = getContentLink(task);

    // Inherit properties from parent group if not explicitly defined on task json
    this.task.inheritFromParent(task, 'defaultCompletion');
    this.task.inheritFromParent(task, 'isNumericCompletion');
    this.task.inheritFromParent(task, 'cPrevAny');

    // Combine properties defined on parent
    this.task.concatWithParent(task, 'cPrev');
    this.task.concatWithParent(task, 'cNext');
    this.task.concatWithParent(task, 'cSiblings');
    this.task.concatWithParent(task, 'cCombo');
    this.task.concatWithParent(task, 'cExclude');
    this.task.concatWithParent(task, 'cExclusive');

    this.task.deepConcatWithParent(task, 'cPrevAt');
    this.task.deepConcatWithParent(task, 'cSiblingsAt');
    this.task.deepConcatWithParent(task, 'cComboAt');

    // Initialize signals
    task.completionFlag$ = signal(task.defaultCompletion ?? Completion.N);
    task.selected = signal(false);

    return task;
}
