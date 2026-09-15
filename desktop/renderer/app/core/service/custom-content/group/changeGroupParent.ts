import type { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';

import type { CustomContentService } from '../custom-content.service';

export function changeGroupParent(service: CustomContentService) {
    return (
        group: DataGroup,
        newParent: DataGroup,
        newKey: string,
    ): void => {
        group._key = newKey;
        group._parent = newParent;
        group.storageKey = newKey;
        group.fullStorageKey = newParent ? `${newParent.fullStorageKey}.${newKey}` : newKey;
        group.contentLink = getContentLink(group);

        if(!newParent.subGroups) newParent.subGroups = new Map();
        newParent.subGroups.set(newKey, group);
    };
}
