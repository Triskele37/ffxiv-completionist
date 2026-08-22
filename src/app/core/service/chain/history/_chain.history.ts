import { signal } from '@angular/core';

import type { ChainServiceContext } from '../types';
import { addHistory } from './addHistory';
import { setHistoryDisabled } from './setHistoryDisabled';
import { setHistoryLimit } from './setHistoryLimit';
import { undoCurrentChain } from './undoCurrentChain';
import { ChainHistoryFacetContext } from './_types';

export type ChainHistoryFacet = ReturnType<typeof createHistoryFacet>;

export function createHistoryFacet(this: ChainServiceContext) {
    const context: ChainHistoryFacetContext = {
        history: signal([]),
        historyLimit: 10,
    };

    return {
        ...context,
        addHistory: addHistory.bind(this),
        setHistoryDisabled: setHistoryDisabled.bind(this),
        setHistoryLimit: setHistoryLimit.bind(this),
        undoCurrentChain: undoCurrentChain.bind(this),
    };
}
