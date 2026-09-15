import type { DataService } from '../data-service';

export function getLinkedName(service: DataService) {
    return (
        pathOrValue: number | string,
        isLink: boolean
    ): number | string => {
        if(pathOrValue && isLink) {
            const linkedTask = service.getAnyChild(pathOrValue.toString());
            if(linkedTask) return linkedTask.name;
        }

        return pathOrValue;
    };
}
