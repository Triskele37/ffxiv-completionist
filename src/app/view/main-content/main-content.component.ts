import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../core/services/navigation/navigation.service';
import { DataGroup } from '../../domain/DataGroup';

@Component({
    selector: 'xiv-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    //TODO: allData: data
    selectedGroup: DataGroup;
    showAll: boolean = false;
    isShowAllVisible: boolean = false;

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnInit(): void {
        this.svcNavigation.selectedGroup$.subscribe((selectedGroup) => {
            this.selectedGroup = selectedGroup;
            this.showAll = false;
            this.isShowAllVisible = !!selectedGroup?.subGroups?.columnConfig;
        });
    }

    toggleShowAll() {
        this.showAll = !this.showAll;
    }
}
