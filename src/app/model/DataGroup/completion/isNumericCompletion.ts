import { DataGroup } from '../';

export function setIsNumericCompletion(group: DataGroup, value: boolean) {
    group.isNumericCompletion = value;
    group.tasks.forEach((task) => task.isNumericCompletion = value);
}
