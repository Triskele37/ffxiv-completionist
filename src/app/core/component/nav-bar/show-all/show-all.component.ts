import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

/** The navigation bar active in the main view
 * */
@Component({
    selector: 'xiv-show-all',
    templateUrl: './show-all.component.html'
})
export class ShowAllComponent implements OnInit, OnDestroy {
    sub: Subscription;

    isShowAllVisible: boolean;

    constructor(public svcNavigation: NavigationService) {
    }

    ngOnInit(): void {
        this.sub = this.svcNavigation.selectedGroup$.subscribe(
            this.onSelectedGroupChange.bind(this)
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onSelectedGroupChange(selectedGroup: DataGroup): void {
        const { isUiGroup, isCustomGroup, isBookmarkGroup } = selectedGroup;
        if(isUiGroup || isCustomGroup || isBookmarkGroup) {
            this.isShowAllVisible = false;
        }
        else {
            this.isShowAllVisible = !!(selectedGroup.subGroups && selectedGroup.columns);
        }

        this.emitShowAllChange(false);
    }

    emitShowAllChange(value: boolean): void {
        this.svcNavigation.allTaskViewEnabled = value;
    }
}
