import { ChainService } from '@service/chain/chain.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import type { changeCompletion } from './methods/changeCompletion';
import type { setCompletion } from './methods/setCompletion';
import type { setCompletionFlag } from './methods/setCompletionFlag';
import type { setCompletionNumber } from './methods/setCompletionNumber';
import type { setDefaultCompletion } from './methods/setDefaultCompletion';
import type { getDefaultNumericCompletion } from './methods/getDefaultNumericCompletion';

export interface MarkServiceContext {
    svcChain: ChainService;
    svcConfig: ConfigStoreService;

    changeCompletion: typeof changeCompletion;
    setCompletion: typeof setCompletion;
    setCompletionFlag: typeof setCompletionFlag;
    setCompletionNumber: typeof setCompletionNumber;
    setDefaultCompletion: typeof setDefaultCompletion;
    getDefaultNumericCompletion: typeof getDefaultNumericCompletion;
}
