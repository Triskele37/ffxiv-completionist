import type { ChainServiceContext } from '../types';
import { applyChainedNumberMet } from './applyChainedNumberMet';
import { applyChainedNumberUnmet } from './applyChainedNumberUnmet';
import { applyFlagToTask } from './applyFlagToTask';
import { applyMetNumberToTask } from './applyMetNumberToTask';
import { applyUnmetNumberToTask } from './applyUnmetNumberToTask';

export type ChainApplyFacet = ReturnType<typeof createApplyFacet>;

export function createApplyFacet(this: ChainServiceContext) {
    return {
        applyFlagToTask: applyFlagToTask.bind(this),
        applyMetNumberToTask: applyMetNumberToTask.bind(this),
        applyUnmetNumberToTask: applyUnmetNumberToTask.bind(this),
        applyChainedNumberMet: applyChainedNumberMet.bind(this),
        applyChainedNumberUnmet: applyChainedNumberUnmet.bind(this),
    };
}
