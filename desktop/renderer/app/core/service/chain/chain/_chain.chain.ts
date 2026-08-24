import type { ChainServiceContext } from '../types';
import { applyChains } from './applyChains';
import { chainPrevSiblingsAt } from '../chain/chainPrevSiblingsAt';
import { chainCombo } from '../chain/chainCombo';
import { chainComboAt } from '../chain/chainComboAt';
import { chainExclude } from '../chain/chainExclude';
import { chainExclusive } from '../chain/chainExclusive';
import { chainNext } from '../chain/chainNext';
import { chainPrev } from '../chain/chainPrev';
import { chainSiblings } from '../chain/chainSiblings';
import { chainUnlock } from '../chain/chainUnlock';

export type ChainChainFacet = ReturnType<typeof createChainFacet>;

export function createChainFacet(this: ChainServiceContext) {
    return {
        applyChains: applyChains.bind(this),

        chainPrevSiblingsAt: chainPrevSiblingsAt.bind(this),
        chainCombo: chainCombo.bind(this),
        chainComboAt: chainComboAt.bind(this),
        chainExclude: chainExclude.bind(this),
        chainExclusive: chainExclusive.bind(this),
        chainNext: chainNext.bind(this),
        chainPrev: chainPrev.bind(this),
        chainSiblings: chainSiblings.bind(this),
        chainUnlock: chainUnlock.bind(this),
    };
}
