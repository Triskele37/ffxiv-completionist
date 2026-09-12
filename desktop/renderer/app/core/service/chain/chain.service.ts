import { Injectable, signal, inject } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';

import type { ChainApplyFacet } from './apply/_chain.apply';
import { createApplyFacet } from './apply/_chain.apply';
import type { ChainChainFacet } from './chain/_chain.chain';
import { createChainFacet } from './chain/_chain.chain';
import type { ChainConstraintFacet } from './constraint/_chain.constraint';
import { createConstraintFacet } from './constraint/_chain.constraint';
import type { ChainCurrentFacet } from './current/_chain.current';
import { createCurrentFacet } from './current/_chain.current';
import type { ChainHistoryFacet } from './history/_chain.history';
import { createHistoryFacet } from './history/_chain.history';
import type { ChainServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService implements ChainServiceContext {
    svcConfig = inject(ConfigStoreService);
    svcData = inject(DataService);
    svcMark = inject(MarkService);

    force: boolean = false;

    chainedTaskCount: ChainServiceContext['chainedTaskCount'] = signal(0);
    chainedGroups: ChainServiceContext['chainedGroups'] = signal([]);
    chainStart: ChainServiceContext['chainStart'] = signal(null);

    readonly apply: ChainApplyFacet = createApplyFacet.call(this);
    readonly chain: ChainChainFacet = createChainFacet.call(this);
    readonly constraint: ChainConstraintFacet = createConstraintFacet.call(this);
    readonly current: ChainCurrentFacet = createCurrentFacet.call(this);
    readonly history: ChainHistoryFacet = createHistoryFacet.call(this);
}
