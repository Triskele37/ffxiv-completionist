import type { DataGroup } from '@model/DataGroup';
import { fuzzyMatchValue } from '@model/util/fuzzyMatch';

import type { GroupMatch } from '../SearchTypes';
import type { SearchServiceContext } from '../types';

export function searchGroupsForTerm(this: SearchServiceContext) {
    return (
        group: DataGroup,
        searchTerm: string,
        partial: boolean,
    ): GroupMatch[] => {
        if(group.isBookmarkGroup) return [];

        const matches: GroupMatch[] = [];

        if(fuzzyMatchValue(group.name, searchTerm, partial)) {
            matches.push({ header: 'ABC', value: group.name, group });
        }

        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            matches.push(...this.searchGroupsForTerm(subGroup, searchTerm, partial));
        });

        return matches;
    };
}
