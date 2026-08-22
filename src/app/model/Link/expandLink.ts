import { getGroup } from '@model/DataGroup/get/getGroup';

import { curryIsInRange, parseIdSelector } from './parseIdSelector';

// Needs to match task ranges and single task (not .all)
const idSelectorRegex = /^(.*)\.([0-9,!-]+)$/;

export function expandLink(fullLink: string): string[] {
    if(fullLink.endsWith('.all')) return expandAll(fullLink);

    const [, groupLink, idSelector] = fullLink.match(idSelectorRegex) ?? [];
    if(idSelector.match(/[-,!]/)) return expandIdSelector(groupLink, idSelector);

    // Fall-through if link didn't need expanding
    return [fullLink];
}

function expandAll(fullLink: string): string[] {
    const groupLink = fullLink.replace(/\.all$/, '');
    const group = getGroup(groupLink);
    if(!group) return [];

    return group.tasks.map((t) => `${groupLink}.${t.id}`);
}

function expandIdSelector(groupLink: string, idSelector: string): string[] {
    const group = getGroup(groupLink);
    if(!group) return [];

    const parsedIdSelector = parseIdSelector(idSelector);

    return group.tasks
        .filter((task) => {
            const isInRange = curryIsInRange(task.id);

            if(parsedIdSelector.exclude.some(isInRange)) return false;

            if(!parsedIdSelector.include.length) return true;

            return parsedIdSelector.include.some(isInRange);
        })
        .map((t) => `${groupLink}.${t.id}`);
}
