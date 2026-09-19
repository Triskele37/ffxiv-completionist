import type { DataGroup } from '@model/DataGroup';
import { fuzzyMatchValue } from '@model/util/fuzzyMatch';

import type { SearchService } from '../search.service';
import type { GroupMatch } from '../types';

export function searchGroupsForTerm(service: SearchService) {
    return (
        group: DataGroup,
        searchTerm: string,
        partial: boolean,
    ): GroupMatch[] => {
        if(group.type !== 'Data' && group.type !== 'Custom') return [];

        const matches: GroupMatch[] = [];

        if(fuzzyMatchValue(group.name, searchTerm, partial)) {
            matches.push({ header: 'ABC', value: group.name, group });
        }

        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            matches.push(...service.searchGroupsForTerm(subGroup, searchTerm, partial));
        });

        return matches;
    };
}
