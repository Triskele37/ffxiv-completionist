import { Completion } from '@constant';
import type { AtLinks } from '@model/Chain/ChainLink';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * TODO - are these two different?
 * cPrevAt
 * cSiblingsAt
 * A.cSiblingsAt.10(B)
 * - A and B become siblings only when A is at or above 10
 * - TODO forward only? B doesn't link back in most data currently
 * */
export function chainPrevSiblingsAt(service: ChainService) {
    return (
        { task, flag }: ChainContext,
        atChains: AtLinks | undefined,
    ): void => {
        // Early bail conditions
        if(!atChains) return;

        Object.keys(atChains).forEach((at) => {
            const chainAt = parseInt(at, 10);

            if(task._parent.isNumericCompletion) {
                if(chainAt <= parseInt(flag, 10)) {
                    // Numeric Completion meets 'at' requirement
                    service.applyChainedNumberMet(task, atChains[at], at);
                }
                else {
                    // Numeric Completion does not meet 'at' requirement
                    service.applyChainedNumberUnmet(task, atChains[at], at);
                }
            }
            else {
                if(flag === Completion.Y) {
                    service.applyChainedNumberMet(task, atChains[at], at);
                }
                else if(flag === Completion.N) {
                    service.applyChainedNumberUnmet(task, atChains[at], at);
                }
            }
        });
    };
}
