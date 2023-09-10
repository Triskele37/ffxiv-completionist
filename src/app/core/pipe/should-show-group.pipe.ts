import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { isHiddenGroup } from '@model/DataGroup/isHiddenGroup';
import { ConfigStoreService } from '@service/store/config-store.service';

/** Determine if a summary group should be displayed
 * */
@Pipe({ name: 'shouldShowSummaryGroup' })
export class ShouldShowSummaryGroupPipe implements PipeTransform {
    constructor(private svcConfig: ConfigStoreService) {
    }

    transform(group: DataGroup): boolean {
        if(group.isBookmarkGroup) return false;
        if(group.isCustomGroup) return false;

        return !isHiddenGroup(group, this.svcConfig);
    }
}

@NgModule({
    declarations: [ShouldShowSummaryGroupPipe],
    exports: [ShouldShowSummaryGroupPipe]
})
export class GroupDisplayPipeModule {
}
