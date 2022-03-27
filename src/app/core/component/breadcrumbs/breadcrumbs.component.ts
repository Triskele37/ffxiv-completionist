import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

type BreadcrumbData = { index: number };
type ClickEvent = {
    item: { data: BreadcrumbData } & MenuItem;
};

/** The breadcrumb bar active in the main view
 * */
@Component({
    selector: 'xiv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    items: MenuItem[] = [];
    private sub: Subscription;

    @Output() showAllChange = new EventEmitter<boolean>();
    showAll: boolean = false;
    isShowAllVisible: boolean;

    constructor(
        public svcNavigation: NavigationService
    ) {
    }

    ngOnInit() {
        this.sub = this.svcNavigation.selectedGroup$.subscribe(
            this.onSelectedGroupChange.bind(this)
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goToHistory(group: DataGroup): void {
        this.svcNavigation.setBreadcrumbs(group.fullStorageKey.split('.'));
    }

    // Handler for when breadcrumbs$ changes
    private onSelectedGroupChange(selectedGroup: DataGroup): void {
        this.items = selectedGroup.groupPath.map((breadcrumb, index) => ({
            label: breadcrumb,
            data: { index }
        }));

        const { isUiGroup, isCustomGroup, isBookmarkGroup } = selectedGroup;
        if(isUiGroup || isCustomGroup || isBookmarkGroup) {
            this.isShowAllVisible = false;
        }
        else {
            this.isShowAllVisible = !!(selectedGroup.subGroups && selectedGroup.columns);
        }

        this.emitShowAllChange(false);
    }

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick($event: ClickEvent): void {
        this.svcNavigation.popCrumbsUntil($event.item.data.index);
    }

    emitShowAllChange(value: boolean): void {
        this.showAll = value;
        this.showAllChange.emit(value);
    }

}
