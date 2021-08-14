import { data } from '../../../data';

//----------------------------------------------------------------------------- Main Callback
export const searchData = function(searchTerm, strict) {
    const matches = searchGroupForTerm(data, searchTerm, strict);
    const groupedMatches = groupMatches(matches);

    return cleanGroupedMatches(groupedMatches);
};

function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, i) => val === b[i]);
}

//----------------------------------------------------------------------------- Recursive Search
function searchGroupForTerm(group, searchTerm, strict) {
    const matches = [];

    // Recurse downward
    if(group.subGroups && group.subGroups.length) {
        group.subGroups.forEach((subGroup) => matches.push(...searchGroupForTerm(subGroup, searchTerm, strict)));
    }

    // Search current group
    if(!!group.taskCount) {
        for(const id in group.tasks) {
            const taskName = group.tasks[id].name;
            if(taskName && namesFuzzyMatch(searchTerm, taskName, strict)) {
                matches.push({
                    path: group.groupPath.join(' > '),
                    name: taskName,
                    id: id
                });
            }
        }
    }

    return matches;
}

// Fuzzy matches search term against task name or if task name includes search term
function namesFuzzyMatch(searchTerm, taskName, strict) {
    const fuzzySearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

    if(fuzzySearchTerm === fuzzyTaskName) return true;

    return !strict && fuzzyTaskName.includes(fuzzySearchTerm);
}

//----------------------------------------------------------------------------- Group Results
function groupMatches(matches) {
    const groupedMatches = [];
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

//----------------------------------------------------------------------------- Clean Matches
function cleanGroupedMatches(matches) {
    matches.forEach((match) => {
        const taskCount = match.tasks.length;
        match.matchesString = taskCount > 1 ? `(${taskCount}) ` : '';
        match.matchesString += match.tasks.map((t) => t.name).join(', ');
    });

    return matches;
}
