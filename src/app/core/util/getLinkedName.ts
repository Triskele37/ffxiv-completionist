import { DataGroup } from '@domain/DataGroup';

export function getLinkedName(
    pathOrValue: number | string,
    isLink: boolean
): number | string {
    if(pathOrValue && isLink) {
        const linkedTask = DataGroup.overall.getChildTask(pathOrValue.toString());
        if(linkedTask) return linkedTask.name;
    }

    return pathOrValue;
}
