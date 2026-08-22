import { DataServiceContext } from '../types';

/**
 * Expand links that end with `.all`
 * */
export function expandAllLink(
    this: DataServiceContext,
    fullLink: string,
): string[] {
    const groupLink = fullLink.replace(/\.all$/, '');
    const group = this.get.getGroup(groupLink);
    if(!group) return [];

    return group.tasks.map((t) => `${groupLink}.${t.id}`);
}
