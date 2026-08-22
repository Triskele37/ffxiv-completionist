import { getTask } from '@model/Task/get/getTask';

export function getLinkedName(
    pathOrValue: number | string,
    isLink: boolean
): number | string {
    if(pathOrValue && isLink) {
        const linkedTask = getTask(pathOrValue.toString());
        if(linkedTask) return linkedTask.name;
    }

    return pathOrValue;
}
