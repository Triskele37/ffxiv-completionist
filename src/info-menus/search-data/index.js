import { data } from '../../data';

//----------------------------------------------------------------------------- Main Callback
export const searchData = function(searchTerm) {
    const matches = searchGroupForTerm(data, searchTerm);
    const groupedMatches = groupMatches(matches);

    return cleanGroupedMatches(groupedMatches);
};

function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, i) => val === b[i]);
}

//----------------------------------------------------------------------------- Recursive Search
function searchGroupForTerm(group, searchTerm) {
    const matches = [];

    // Recurse downward
    if(group.subGroups && group.subGroups.length) {
        group.subGroups.forEach((subGroup) => matches.push(...searchGroupForTerm(subGroup, searchTerm)));
    }

    // Search current group
    if(group.tasks && group.tasks.length) {
        group.tasks.forEach((task) => {
            if(task.name && namesFuzzyMatch(searchTerm, task.name)) matches.push([...group.groupPath, task.name]);
            if(task.Name && namesFuzzyMatch(searchTerm, task.Name)) matches.push([...group.groupPath, task.Name]);
        });
    }

    return matches;
}

// Fuzzy matches search term against task name or if task name includes search term
function namesFuzzyMatch(searchTerm, taskName) {
    const fuzzySearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

    return fuzzySearchTerm === fuzzyTaskName || fuzzyTaskName.includes(fuzzySearchTerm);
}

//----------------------------------------------------------------------------- Group Results
function groupMatches(matches) {
    const groupedMatches = [];
    matches.forEach((match) => {
        const task = match.pop();
        const lastMatch = groupedMatches[groupedMatches.length - 1];

        if(lastMatch && arrayEquals(lastMatch.path, match)) {
            lastMatch.tasks.push(task);
        }
        else {
            groupedMatches.push({
                path: match,
                tasks: [task]
            });
        }
    });

    return groupedMatches;
}

//----------------------------------------------------------------------------- Clean Matches
function cleanGroupedMatches(matches) {
    matches.forEach((match) => {
        match.pathString = match.path.join(' > ');

        match.matchesString = match.tasks.length > 1 ? `(${match.tasks.length}) ` : '';
        match.matchesString += match.tasks.join(', ');
    });

    return matches;
}