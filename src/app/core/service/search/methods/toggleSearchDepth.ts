import { SearchServiceContext } from '../types';

export function toggleSearchDepth(this: SearchServiceContext) {
    return (): void => {
        if(!this.searchTerm) return;

        this.expanded = !this.expanded;
        this.doAppSearch(this.searchTerm);
    };
}
