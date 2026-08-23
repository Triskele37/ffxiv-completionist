import type { PipeTransform} from '@angular/core';
import { Pipe, inject } from '@angular/core';

import type { DataGroup } from '@model/DataGroup';
import { isHiddenGroup } from '@model/DataGroup/isHiddenGroup';
import { ConfigStoreService } from '@service/store/config-store.service';

/**
 * Determine if a summary group should be displayed
 * */
@Pipe({
    name: 'shouldShowSummaryGroup'
})
export class ShouldShowSummaryGroupPipe implements PipeTransform {
    private svcConfig = inject(ConfigStoreService);

    transform(group: DataGroup | null): boolean {
        if(!group) return false;
        if(group.isBookmarkGroup) return false;
        if(group.isCustomGroup && group._key === 'custom') return false;

        return !isHiddenGroup(group, this.svcConfig);
    }
}
