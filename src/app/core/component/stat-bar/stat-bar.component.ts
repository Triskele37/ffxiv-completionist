import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-stat-bar',
    templateUrl: './stat-bar.component.html',
    styleUrls: ['./stat-bar.component.scss']
})
export class StatBarComponent implements OnInit {
    // Group given to the 1st summary line
    allData: DataGroup;

    // Group given to the 2nd summary line
    group: DataGroup;

    // Flag to hide the 2nd summary line
    hideGroupLine: boolean = false;

    // Actions available when right clicking either bar
    contextMenuItems: MenuItem[] = [{
        label: 'Toggle Group Line',
        command: this.toggleGroupLine.bind(this)
    }];

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit() {
        this.allData = this.svcData.data;
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            this.group = (group instanceof DataGroup) ? group : null;
        });
    }

    private toggleGroupLine() {
        this.hideGroupLine = !this.hideGroupLine;
    }
}
