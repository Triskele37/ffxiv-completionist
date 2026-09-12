import type { ConfigStoreService } from '@service/store/config-store.service';

import type { setCompletion } from './methods/setCompletion';
import type { setCompletionFlag } from './methods/setCompletionFlag';
import type { setCompletionNumber } from './methods/setCompletionNumber';
import type { setDefaultCompletion } from './methods/setDefaultCompletion';
import type { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

export interface MarkServiceContext {
    svcConfig: ConfigStoreService;

    setCompletion: typeof setCompletion;
    setCompletionFlag: typeof setCompletionFlag;
    setCompletionNumber: typeof setCompletionNumber;
    setDefaultCompletion: typeof setDefaultCompletion;
    getDefaultNumericCompletion: typeof getDefaultNumericCompletion;
}
