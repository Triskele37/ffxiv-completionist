import { sortPatchStrings } from '@model/util/sortPatchStrings';

import type { TableService } from '../table.service';

const alphanumericRegex = new RegExp(/[^\w.]/g);

export function sortStringOrLink(service: TableService) {
    return (
        a: string,
        b: string,
        field: string,
    ): number => {
        // Attempt to get link text
        const linkA = service.svcData.getLinkedName(a, true);
        const linkB = service.svcData.getLinkedName(b, true);

        // non-matching means the values are links, make sure they're strings
        if(linkA !== a) a = linkA.toString();
        if(linkB !== b) b = linkB.toString();

        // Replace non-alphanumeric characters
        a = a.replace(alphanumericRegex, '');
        b = b.replace(alphanumericRegex, '');

        // Handle by field key
        if(field === 'patch') {
            return sortPatchStrings(a, b);
        }
        else {
            return a.localeCompare(b, undefined, { numeric: true });
        }
    };
}
