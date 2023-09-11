import { Globals } from '@constant/Global';
import { getChildTask } from '@model/DataGroup/children/getChild';

export function getLinkedName(
    pathOrValue: number | string,
    isLink: boolean
): number | string {
    if(pathOrValue && isLink) {
        const linkedTask = getChildTask(Globals.allData, pathOrValue.toString());
        if(linkedTask) return linkedTask.name;
    }

    return pathOrValue;
}
