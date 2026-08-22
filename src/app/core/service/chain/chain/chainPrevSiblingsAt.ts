import { Completion } from '@constant';
import { AtLinks } from '@model/Chain/ChainLink';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * TODO - are these two different?
 * cPrevAt
 * cSiblingsAt
 * A.cSiblingsAt.10(B)
 * - A and B become siblings only when A is at or above 10
 * - TODO forward only? B doesn't link back in most data currently
 * */
export function chainPrevSiblingsAt(
    this: ChainServiceContext,
    { task, flag }: ChainContext,
    atChains: AtLinks | undefined,
): void {
    // Early bail conditions
    if(!atChains) return;

    Object.keys(atChains).forEach((at) => {
        const chainAt = parseInt(at, 10);

        if(task._parent.isNumericCompletion) {
            if(chainAt <= parseInt(flag, 10)) {
                // Numeric Completion meets 'at' requirement
                this.apply.applyChainedNumberMet(task, atChains[at], at);
            }
            else {
                // Numeric Completion does not meet 'at' requirement
                this.apply.applyChainedNumberUnmet(task, atChains[at], at);
            }
        }
        else {
            if(flag === Completion.Y) {
                this.apply.applyChainedNumberMet(task, atChains[at], at);
            }
            else if(flag === Completion.N) {
                this.apply.applyChainedNumberUnmet(task, atChains[at], at);
            }
        }
    });
}
