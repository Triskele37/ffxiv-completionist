import { Injectable } from '@angular/core';

import { ChainService } from '@service/chain/chain.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import { changeCompletion } from './methods/changeCompletion';
import { setCompletion } from './methods/setCompletion';
import { setCompletionFlag } from './methods/setCompletionFlag';
import { setCompletionNumber } from './methods/setCompletionNumber';
import { setDefaultCompletion } from './methods/setDefaultCompletion';
import { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

import { MarkServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class MarkService implements MarkServiceContext {
    constructor(
        public svcChain: ChainService,
        public svcConfig: ConfigStoreService,
    ) {
    }

    changeCompletion: MarkServiceContext['changeCompletion'] = changeCompletion.bind(this);
    setCompletion: MarkServiceContext['setCompletion'] = setCompletion.bind(this);
    setCompletionFlag: MarkServiceContext['setCompletionFlag'] = setCompletionFlag.bind(this);
    setCompletionNumber: MarkServiceContext['setCompletionNumber'] = setCompletionNumber.bind(this);
    setDefaultCompletion: MarkServiceContext['setDefaultCompletion'] = setDefaultCompletion.bind(this);
    getDefaultNumericCompletion: MarkServiceContext['getDefaultNumericCompletion'] = getDefaultNumericCompletion.bind(this);
}
