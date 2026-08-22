import { Injectable, signal } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';

import { createApplyFacet, ChainApplyFacet } from './apply/_chain.apply';
import { createChainFacet, ChainChainFacet } from './chain/_chain.chain';
import { createConstraintFacet, ChainConstraintFacet } from './constraint/_chain.constraint';
import { createCurrentFacet, ChainCurrentFacet } from './current/_chain.current';
import { createHistoryFacet, ChainHistoryFacet } from './history/_chain.history';
import { ChainServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService implements ChainServiceContext {
    force: boolean = false;

    chainedTaskCount: ChainServiceContext['chainedTaskCount'] = signal(0);
    chainedGroups: ChainServiceContext['chainedGroups'] = signal([]);
    chainStart: ChainServiceContext['chainStart'] = signal(null);

    constructor(
        public svcConfig: ConfigStoreService,
        public svcData: DataService,
        public svcMark: MarkService,
    ) {
    }

    readonly apply: ChainApplyFacet = createApplyFacet.call(this);
    readonly chain: ChainChainFacet = createChainFacet.call(this);
    readonly constraint: ChainConstraintFacet = createConstraintFacet.call(this);
    readonly current: ChainCurrentFacet = createCurrentFacet.call(this);
    readonly history: ChainHistoryFacet = createHistoryFacet.call(this);
}
