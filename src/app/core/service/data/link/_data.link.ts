import type { DataServiceContext } from '../types';
import { expandLink } from './expandLink';
import { expandAllLink } from './expandAllLink';
import { expandIdSelector } from './expandIdSelector';

export type DataLinkFacet = ReturnType<typeof createLinkFacet>;

export function createLinkFacet(this: DataServiceContext) {
    return {
        expandLink: expandLink.bind(this),
        expandAllLink: expandAllLink.bind(this),
        expandIdSelector: expandIdSelector.bind(this),
    };
}
