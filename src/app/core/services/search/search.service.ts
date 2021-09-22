import { Injectable } from '@angular/core';

import { data } from '../../../data';
import { DataGroup } from '../../../domain/DataGroup';

import { Match, MatchGroup } from './types';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    static cleanMatchGroups(matches: MatchGroup[]): MatchGroup[] {
        matches.forEach((match) => {
            const taskCount = match.tasks.length;
            match.matchesString = taskCount > 1 ? `(${taskCount}) ` : '';
            match.matchesString += match.tasks.map((t) => t.name).join(', ');
        });

        return matches;
    }

    searchData(searchTerm: string, strict: boolean = false): MatchGroup[] {
        const matches = this.searchGroupForTerm(data, searchTerm, strict);
        const matchGroups = this.groupMatches(matches);

        return SearchService.cleanMatchGroups(matchGroups);
    }

    searchGroupForTerm(group: DataGroup, searchTerm: string, strict: boolean): Match[] {
        const matches: Match[] = [];

        // Recurse downward
        if(group.subGroups && group.subGroups.length) {
            group.subGroups.forEach((subGroup) =>
                matches.push(...this.searchGroupForTerm(subGroup, searchTerm, strict))
            );
        }

        // Search current group
        if(!!group.taskCount) {
            for(const id in group.tasks) {
                if(group.tasks.hasOwnProperty(id)) {
                    const taskName = group.tasks[id].name;
                    if(taskName && this.namesFuzzyMatch(searchTerm, taskName, strict)) {
                        matches.push({
                            path: group.groupPath.join(' > '),
                            name: taskName,
                            id
                        });
                    }
                }
            }
        }

        return matches;
    }

    // Fuzzy matches search term against task name or if task name includes search term
    namesFuzzyMatch(searchTerm: string, taskName: string, strict: boolean): boolean {
        const fuzzySearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(fuzzySearchTerm === fuzzyTaskName) return true;

        return !strict && fuzzyTaskName.includes(fuzzySearchTerm);
    }

    private groupMatches(matches: Match[]): MatchGroup[] {
        const groupedMatches: MatchGroup[] = [];

        matches.forEach((match) => {
            const lastMatch = groupedMatches[groupedMatches.length - 1];

            if(lastMatch && lastMatch.path === match.path) {
                lastMatch.tasks.push({
                    id: match.id,
                    name: match.name
                });
            }
            else {
                groupedMatches.push({
                    path: match.path,
                    tasks: [{
                        id: match.id,
                        name: match.name
                    }]
                });
            }
        });

        return groupedMatches;
    }
}
