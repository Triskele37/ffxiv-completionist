import { Completion } from '@constant';

import { applyChainedNumberMet } from '../applyFlag/applyChainedNumberMet';
import { applyChainedNumberUnmet } from '../applyFlag/applyChainedNumberUnmet';
import { Chainer } from '../Chainer';
import { AtLinks } from '../ChainLink';

export function applyAtChain(chainer: Chainer, atChains: AtLinks): void {
    Object.keys(atChains).forEach((at) => {
        const chainAt = parseInt(at, 10);

        if(chainer.task._parent.isNumericCompletion) {
            if(chainAt <= parseInt(chainer.flag, 10)) {
                // Numeric Completion meets 'at' requirement
                applyChainedNumberMet(chainer, atChains[at], at);
            }
            else {
                // Numeric Completion does not meet 'at' requirement
                applyChainedNumberUnmet(chainer, atChains[at], at);
            }
        }
        else {
            if(chainer.flag === Completion.Y) {
                applyChainedNumberMet(chainer, atChains[at], at);
            }
            else if(chainer.flag === Completion.N) {
                applyChainedNumberUnmet(chainer, atChains[at], at);
            }
        }
    });
}
