import type { ChainServiceContext } from '../types';
import { chainTask } from './chainTask';
import { hasChainProps } from './hasChainProps';
import { shouldChain } from './shouldChain';
import { startChain } from './startChain';
import { taskAlreadyChained } from './taskAlreadyChained';
import { pushChained } from './pushChained';

export type ChainCurrentFacet = ReturnType<typeof createCurrentFacet>;

export function createCurrentFacet(this: ChainServiceContext) {
    return {
        chainTask: chainTask.bind(this),
        hasChainProps: hasChainProps.bind(this),
        shouldChain: shouldChain.bind(this),
        startChain: startChain.bind(this),
        taskAlreadyChained: taskAlreadyChained.bind(this),
        pushChained: pushChained.bind(this),
    };
}
