import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { NavigationService } from '../navigation.service';

export function setSelectedContent(service: NavigationService) {
    return (
        content: DataGroup | Task,
    ): void => {
        if(content.dataType === 'Group') {
            service.setSelectedGroup(content);
        }
        else {
            service.setSelectedTask(content);
        }
    };
}
