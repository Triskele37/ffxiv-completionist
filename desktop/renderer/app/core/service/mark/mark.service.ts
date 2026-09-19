import { Injectable, inject } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

//#region ------------------------------------------------------- Methods
import { setCompletion } from './methods/setCompletion';
import { setCompletionFlag } from './methods/setCompletionFlag';
import { setCompletionNumber } from './methods/setCompletionNumber';
import { setDefaultCompletion } from './methods/setDefaultCompletion';
import { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

//#endregion

/**
 * Service for simple completion marking
 * - CANNOT depend on chain service (circular)
 * */
@Injectable({
    providedIn: 'root'
})
export class MarkService {
    svcConfig = inject(ConfigStoreService);

    get setCompletion() { return setCompletion(this); }
    get setCompletionFlag() { return setCompletionFlag(this); }
    get setCompletionNumber() { return setCompletionNumber(this); }
    get setDefaultCompletion() { return setDefaultCompletion(this); }
    get getDefaultNumericCompletion() { return getDefaultNumericCompletion(this); }
}
