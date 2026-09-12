import type { WritableSignal } from '@angular/core';
import type { ChainedGroup, ChainStart } from '@service/chain/types';

export type ChainHistoryFacetContext = {
    history: WritableSignal<ChainHistory[]>;
    historyDisabled?: boolean;
    historyLimit: number;
};

export type ChainHistory = {
    chainedTaskCount: number;
    chainStart: ChainStart;
    chainedGroups: ChainedGroup[];
};
