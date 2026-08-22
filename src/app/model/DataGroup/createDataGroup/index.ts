import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion, Lang } from '@constant';
import { Globals } from '@constant/Global';
import { JSONResource } from '@model/JSONResource';
import { getContentLink } from '@model/Link/getContentLink';

import { DataGroup } from '../';
import { initializeColumns } from './initializeColumns';
import { initializeCompletion } from './initializeCompletion';
import { initializeTasks } from './initializeTasks';
import { initializeUi } from './initializeUi';

export function createDataGroup(json: JSONResource, parent: DataGroup | null): DataGroup {
    const updated$ = new Subject<void>();
    const id = `${json.key ?? -1}`;

    const group: DataGroup = {
        dataType: 'Group',
        name: getGroupName(),
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

    initializeColumns(group, json);
    initializeCompletion(group, json);
    initializeUi(group, json);

    // Chain inheritance
    if(json.cCombo) group.cCombo = json.cCombo;

    if(json.tasks) initializeTasks(group, json.tasks);

    return group;

    function getGroupName() {
        const lang = Globals.config?.lang || Lang.EN;

        const longName = json[`groupName_${lang}`] ?? json.groupName;
        const shortName = json[`groupNameShort_${lang}`] ?? json.groupNameShort;

        if(Globals.config?.['use-short-names']) {
            return shortName || longName;
        }
        else {
            return longName;
        }
    }
}
