import { signal } from '@angular/core';

import { Completion } from '@constant';
import type { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';
import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

export function createTask(service: DataService) {
    return (
        json: any,
        parent: DataGroup,
    ): Task => {
        // Map all properties from json to this class
        const task = {
            ...json,
            dataType: 'Task',
            _parent: parent,
        };

        task.storageKey = `${task.id ?? -1}`;
        task.fullStorageKey = `${parent.fullStorageKey}.${task.storageKey}`;

        // Convert lang keys to app keys (combine if app key exists)
        service.flattenLangKeys(task);

        // Must be below flatten lang keys
        task.contentLink = getContentLink(task);

        // Inherit properties from parent group if not explicitly defined on task json
        service.inheritFromParent(task, 'defaultCompletion');
        service.inheritFromParent(task, 'isNumericCompletion');
        service.inheritFromParent(task, 'minValue');
        service.inheritFromParent(task, 'maxValue');
        service.inheritFromParent(task, 'cPrevAny');

        // Combine properties defined on parent
        service.concatWithParent(task, 'cPrev');
        service.concatWithParent(task, 'cNext');
        service.concatWithParent(task, 'cSiblings');
        service.concatWithParent(task, 'cCombo');
        service.concatWithParent(task, 'cExclude');
        service.concatWithParent(task, 'cExclusive');

        service.deepConcatWithParent(task, 'cPrevAt');
        service.deepConcatWithParent(task, 'cSiblingsAt');
        service.deepConcatWithParent(task, 'cComboAt');

        // Initialize signals
        task.completionFlag$ = signal(task.defaultCompletion ?? Completion.N);
        task.selected = signal(false);

        return task;
    };
}
