import { DataGroup } from '../';

/**
 * Propagate a change notification to subscribers up through group and parents
 * - This should occur any time `completionFlag$` changes on a child task
 * */
export function updateCompletion(group: DataGroup): void {
    // Bookmark groups are duplicates, bail
    if(group.isBookmarkGroup) return;

    group.updated$.next();

    if(group._parent) {
        updateCompletion(group._parent);
    }
}
