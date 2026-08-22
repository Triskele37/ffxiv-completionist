import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { DataGroup } from '@model/DataGroup';

export function createDummyGroup(properties: Partial<DataGroup> = {}): DataGroup {
    const updated$ = new Subject<void>();

    return {
        dataType: 'Group',
        name: '',
        _parent: null,
        tasks: [],
        contentLink: '',
        _key: '',
        storageKey: '',
        fullStorageKey: '',
        defaultCompletion: '',
        isNumericCompletion: false,
        numericDecimal: 0,
        updated$,
        onUpdated$: updated$.pipe(debounceTime(250)),
        ...properties
    };
}
