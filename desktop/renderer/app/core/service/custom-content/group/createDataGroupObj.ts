import type { DataGroup } from '@model/DataGroup';

import type { CustomContentService } from '../custom-content.service';

export function createDataGroupObj(service: CustomContentService) {
    return (
        id: number,
        groupName: string,
        parent: DataGroup,
    ): DataGroup => {
        const group = service.svcData.createDataGroup({ key: `g${id}`, groupName }, parent);
        group.type = 'Custom';
        group.draggable = true;
        return group;
    };
}
