import type { DataService } from '../data-service';

// Needs to match task ranges and single task (not .all)
const ID_SELECTOR_REGEX = /^(.*)\.([0-9,!-]+)$/;

/**
 * Entry point to expand any task link
 * */
export function expandLink(service: DataService) {
    return (
        fullLink: string,
    ): string[] => {
        if(fullLink.endsWith('.all')) return service.expandAllLink(fullLink);

        const [, groupLink, idSelector] = fullLink.match(ID_SELECTOR_REGEX) ?? [];
        if(idSelector.match(/[-,!]/)) return service.expandIdSelector(groupLink, idSelector);

        // Fall-through if link didn't need expanding
        return [fullLink];
    };
}
