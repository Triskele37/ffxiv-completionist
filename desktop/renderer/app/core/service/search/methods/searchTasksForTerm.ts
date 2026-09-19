import type { DataGroup } from '@model/DataGroup';
import { fuzzyMatchValue } from '@model/util/fuzzyMatch';

import type { SearchService } from '../search.service';
import type { Match } from '../types';

export function searchTasksForTerm(service: SearchService) {
    return (
        group: DataGroup,
        searchTerm: string,
        expanded: boolean,
        partial: boolean,
    ): Match[] => {
        const matches: Match[] = [];

        // Recurse downward
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            if(subGroup.type !== 'Data' && subGroup.type !== 'Custom') return;
            matches.push(...service.searchTasksForTerm(subGroup, searchTerm, expanded, partial));
        });

        // Search current group
        group.tasks.forEach((task) => {
            if(!expanded) { // name only search
                task._parent.columns?.forEach(({ key, header }) => {
                    if(!task.name) return;
                    if(key !== 'name') return;

                    const termInName = fuzzyMatchValue(task.name, searchTerm, partial);
                    const nameInTerm = false; //fuzzyMatchValue(searchTerm, task.name, partial);

                    if(termInName || nameInTerm) {
                        matches.push({
                            header,
                            value: task.name,
                            task
                        });
                    }
                });
            }
            else { // all column search
                task._parent.columns?.forEach(({ key, header, link }) => {
                    if(!task[key]) return;

                    if(service.fuzzyMatchObject(task, key, searchTerm, partial, link)) {
                        let value: string;

                        if(Array.isArray(task[key])) {
                            value = task[key]
                                .map((path) => service.svcData.getLinkedTextFull(path, !!link))
                                .join(', ');
                        }
                        else {
                            value = service.svcData.getLinkedTextFull(task[key], !!link).toString();
                        }

                        matches.push({ header, value, task });
                    }
                });
            }
        });

        return matches;
    };
}
