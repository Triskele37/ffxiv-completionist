import type { DataServiceContext } from '../types';

export function getLinkedName(
    this: DataServiceContext,
    pathOrValue: number | string,
    isLink: boolean
): number | string {
    if(pathOrValue && isLink) {
        const linkedTask = this.get.getTask(pathOrValue.toString());
        if(linkedTask) return linkedTask.name;
    }

    return pathOrValue;
}
