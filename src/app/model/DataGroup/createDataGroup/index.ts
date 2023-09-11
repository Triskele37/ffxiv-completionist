import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion } from '@constant';
import { getContentLink } from '@model/Link/getContentLink';

import { DataGroup } from '../';
import { initializeColumns } from './initializeColumns';
import { initializeCompletion } from './initializeCompletion';
import { initializeTasks } from './initializeTasks';
import { initializeUi } from './initializeUi';

export function createDataGroup(json, parent: DataGroup): DataGroup {
    const updated$ = new Subject<void>();
    const id = `${json.key ?? -1}`;

    const group: DataGroup = {
        xivDataType: 'Group',
        name: json.groupName,
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

    group.contentLink = getContentLink(group);

    initializeColumns(group, json);
    initializeCompletion(group, json);
    initializeUi(group, json);

    // Chain inheritance
    if(json.cCombo) group.cCombo = json.cCombo;

    if(json.tasks) initializeTasks(group, json.tasks);

    return group;
}
