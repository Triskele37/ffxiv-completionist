import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

// Custom content meta is one level higher than expected from svcSaveStore
export function getMetaStorageKey(service: CustomContentService) {
    return (
        data: DataGroup | Task,
    ) => {
        let modifiedStorageKey = data.fullStorageKey.replace('game.', '');

        if(data.dataType === 'Group') return modifiedStorageKey;

        modifiedStorageKey = modifiedStorageKey.replace(/\.([0-9]+)$/, '.x$1');
        return modifiedStorageKey;
    };
}
