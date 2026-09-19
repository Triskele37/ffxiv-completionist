import type { CustomContentService } from '../custom-content.service';
import type { CustomGroupMetaMap, CustomTaskMetaMap } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getNextKeyForMeta(service: CustomContentService) {
    return (
        metaMap: CustomGroupMetaMap | CustomTaskMetaMap,
        isGroup: boolean,
    ): [number, string] => {
        const prefix = isGroup ? 'g' : 'x';
        let nextId = 0;
        while(!!metaMap[prefix + nextId]) nextId++;
        return [nextId, prefix + nextId];
    };
}
