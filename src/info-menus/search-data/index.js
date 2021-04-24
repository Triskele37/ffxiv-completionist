import { data } from '../../data';

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
    if(group.tasks && group.tasks.length) {
        group.tasks.forEach((task) => {
            if(task.name && namesFuzzyMatch(searchTerm, task.name, strict)) matches.push([...group.groupPath, task.name]);
            if(task.Name && namesFuzzyMatch(searchTerm, task.Name, strict)) matches.push([...group.groupPath, task.Name]);
        });
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