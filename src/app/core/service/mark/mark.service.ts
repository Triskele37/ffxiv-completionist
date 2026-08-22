import { Injectable } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

import { setCompletion } from './methods/setCompletion';
import { setCompletionFlag } from './methods/setCompletionFlag';
import { setCompletionNumber } from './methods/setCompletionNumber';
import { setDefaultCompletion } from './methods/setDefaultCompletion';
import { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

import { MarkServiceContext } from './types';

/**
 * Service for simple completion marking
 * - CANNOT depend on chain service (circular)
 * */
@Injectable({
    providedIn: 'root'
})
export class MarkService implements MarkServiceContext {
    constructor(
        public svcConfig: ConfigStoreService,
    ) {
    }

    setCompletion: MarkServiceContext['setCompletion'] = setCompletion.bind(this);
    setCompletionFlag: MarkServiceContext['setCompletionFlag'] = setCompletionFlag.bind(this);
    setCompletionNumber: MarkServiceContext['setCompletionNumber'] = setCompletionNumber.bind(this);
    setDefaultCompletion: MarkServiceContext['setDefaultCompletion'] = setDefaultCompletion.bind(this);
    getDefaultNumericCompletion: MarkServiceContext['getDefaultNumericCompletion'] = getDefaultNumericCompletion.bind(this);
}
