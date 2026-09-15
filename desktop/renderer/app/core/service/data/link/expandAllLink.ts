import type { DataService } from '../data-service';

/**
 * Expand links that end with `.all`
 * */
export function expandAllLink(service: DataService) {
    return (
        fullLink: string,
    ): string[] => {
        const groupLink = fullLink.replace(/\.all$/, '');
        const group = service.getGroup(groupLink);
        if(!group) return [];

        return group.tasks.map((t) => `${groupLink}.${t.id}`);
    };
}
