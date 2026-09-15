import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function createTask(service: CustomContentService) {
    return (
        group: DataGroup,
        name: string,
        notes: string,
    ): void => {
        const metaStorageKey = service.getMetaStorageKey(group);
        const customMeta = service.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID
        const [nextId, nextKey] = service.getNextKeyForMeta(customMeta, false);

        // Update saved meta
        service.svcSaveStore.set(`${metaStorageKey}.${nextKey}`, { name, notes });

        // Update app tree
        const task = service.svcData.createTask({ id: nextId, name, notes }, group);
        group.tasks.push(task);

        service.onGroupUpdated$.next();
    };
}
