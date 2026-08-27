import { sortPatchStrings } from '@model/util/sortPatchStrings';

import type { TableServiceContext } from '../types';

const alphanumericRegex = new RegExp(/[^\w.]/g);

export function sortStringOrLink(
    this: TableServiceContext,
    a: string,
    b: string,
    field: string
): number {
    // Attempt to get link text
    const linkA = this.svcData.get.getLinkedName(a, true);
    const linkB = this.svcData.get.getLinkedName(b, true);

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
}
