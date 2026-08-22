import { DataGroup } from '@model/DataGroup';
import { fuzzyMatchValue } from '@model/util/fuzzyMatch';

import { Match } from '../SearchTypes';
import { SearchServiceContext } from '../types';

export function searchTasksForTerm(this: SearchServiceContext) {
    return (
        group: DataGroup,
        searchTerm: string,
        expanded: boolean,
        partial: boolean
    ): Match[] => {
        const matches: Match[] = [];

        // Recurse downward
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup || subGroup.isBookmarkGroup) return;
            matches.push(...this.searchTasksForTerm(subGroup, searchTerm, expanded, partial));
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

                    if(this.fuzzyMatchObject(task, key, searchTerm, partial, link)) {
                        let value: string;

                        if(Array.isArray(task[key])) {
                            value = task[key]
                                .map((path) => this.svcData.get.getLinkedName(path, !!link))
                                .join(', ');
                        }
                        else {
                            value = this.svcData.get.getLinkedName(task[key], !!link).toString();
                        }

                        matches.push({ header, value, task });
                    }
                });
            }
        });

        return matches;
    };
}
