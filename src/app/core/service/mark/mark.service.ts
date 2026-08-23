import { Injectable, inject } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

import { setCompletion } from './methods/setCompletion';
import { setCompletionFlag } from './methods/setCompletionFlag';
import { setCompletionNumber } from './methods/setCompletionNumber';
import { setDefaultCompletion } from './methods/setDefaultCompletion';
import { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

import type { MarkServiceContext } from './types';

/**
 * Service for simple completion marking
 * - CANNOT depend on chain service (circular)
 * */
@Injectable({
    providedIn: 'root'
})
export class MarkService implements MarkServiceContext {
    svcConfig = inject(ConfigStoreService);

    setCompletion: MarkServiceContext['setCompletion'] = setCompletion.bind(this);
    setCompletionFlag: MarkServiceContext['setCompletionFlag'] = setCompletionFlag.bind(this);
    setCompletionNumber: MarkServiceContext['setCompletionNumber'] = setCompletionNumber.bind(this);
    setDefaultCompletion: MarkServiceContext['setDefaultCompletion'] = setDefaultCompletion.bind(this);
    getDefaultNumericCompletion: MarkServiceContext['getDefaultNumericCompletion'] = getDefaultNumericCompletion.bind(this);
}
