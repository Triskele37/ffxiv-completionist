import { Completion } from '@constant';

import { applyChainedNumberMet } from '../applyFlag/applyChainedNumberMet';
import { applyChainedNumberUnmet } from '../applyFlag/applyChainedNumberUnmet';
import { ChainMeta } from '../ChainMeta';
import { AtLinks } from '../ChainLink';

/**
 * TODO - are these two different?
 * cPrevAt
 * cSiblingsAt
 * A.cSiblingsAt.10(B)
 * - A and B become siblings only when A is at or above 10
 * - TODO forward only? B doesn't link back in most data currently
 * */
export function applyAtChain({ task, flag }: ChainMeta, atChains: AtLinks | undefined): void {
    // Early bail conditions
    if(!atChains) return;

    Object.keys(atChains).forEach((at) => {
        const chainAt = parseInt(at, 10);

        if(task._parent.isNumericCompletion) {
            if(chainAt <= parseInt(flag, 10)) {
                // Numeric Completion meets 'at' requirement
                applyChainedNumberMet(task, atChains[at], at);
            }
            else {
                // Numeric Completion does not meet 'at' requirement
                applyChainedNumberUnmet(task, atChains[at], at);
            }
        }
        else {
            if(flag === Completion.Y) {
                applyChainedNumberMet(task, atChains[at], at);
            }
            else if(flag === Completion.N) {
                applyChainedNumberUnmet(task, atChains[at], at);
            }
        }
    });
}
