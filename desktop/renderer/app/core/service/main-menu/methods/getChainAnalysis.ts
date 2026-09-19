import { DataGroup } from '@model/DataGroup';
import { ViewToken } from '@view/view-token';

import type { MainMenuService } from '../main-menu.service';

export function getChainAnalysis(service: MainMenuService) {
    return (
        parent: DataGroup,
    ): DataGroup => {
        return service.svcData.createDataGroup({
            key: 'chain-analysis',
            groupName: service.translate.instant('APP.CHAIN_ANALYSIS.TITLE'),
            component: ViewToken.ChainAnalysis
        }, parent);
    };
}
