import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion } from '@constant';
import type { JSONResource } from '@model/JSONResource';
import { getContentLink } from '@model/Link/getContentLink';

import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

/**
 * Create a fully formed DataGroup given json and its parent
 * - includes tasks, not subgroups
 * */
export function createDataGroup(service: DataService) {
    return (
        json: JSONResource,
        parent: DataGroup | null,
    ): DataGroup => {
        const updated$ = new Subject<void>();
        const id = `${json.key ?? -1}`;

        const group: DataGroup = {
            dataType: 'Group',
            name: service.getGroupName(json),
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
            type: json.type || parent?.type || 'Data',
        };

        if(json.order) group.order = json.order;

        group.contentLink = getContentLink(group);

        service.initColumns(group, json);
        service.initCompletion(group, json);
        service.initUi(group, json);

        // Chain inheritance
        if(json.cCombo) group.cCombo = json.cCombo;

        if(json.tasks) service.initTasks(group, json.tasks);

        return group;
    };
}
