import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion } from '@constant';
import type { JSONResource } from '@model/JSONResource';
import { getContentLink } from '@model/Link/getContentLink';

import type { DataGroup } from '@model/DataGroup';

import type { DataServiceContext } from '../types';

/**
 * Create a fully formed DataGroup given json and its parent
 * - includes tasks, not subgroups
 * */
export function createDataGroup(
    this: DataServiceContext,
    json: JSONResource,
    parent: DataGroup | null,
): DataGroup {
    const updated$ = new Subject<void>();
    const id = `${json.key ?? -1}`;

    const group: DataGroup = {
        dataType: 'Group',
        name: this.group.getGroupName(json),
        _key: json.key,
        _parent: parent,
        contentLink: '',
        storageKey: id,
        fullStorageKey: parent ? `${parent.fullStorageKey}.${id}` : id,
        updated$,
        onUpdated$: updated$.pipe(debounceTime(250)),
        tasks: [],
        defaultCompletion: Completion.N,
        isNumericCompletion: false,
        numericDecimal: 0,
    };

    if(json.order) group.order = json.order;

    group.contentLink = getContentLink(group);

    this.group.initColumns(group, json);
    this.group.initCompletion(group, json);
    this.group.initUi(group, json);

    // Chain inheritance
    if(json.cCombo) group.cCombo = json.cCombo;

    if(json.tasks) this.group.initTasks(group, json.tasks);

    return group;
}
