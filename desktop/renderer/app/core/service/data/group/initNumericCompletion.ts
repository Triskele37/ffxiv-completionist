import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

export function initNumericCompletion(service: DataService) {
    return (
        group: DataGroup,
        value: boolean
    ): void => {
        group.isNumericCompletion = value;
        group.tasks.forEach((task) => task.isNumericCompletion = value);
    };
}
