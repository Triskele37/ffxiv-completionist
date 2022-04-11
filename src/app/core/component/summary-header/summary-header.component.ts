import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

enum Lines {
    Overall = 0,
    Group = 1
}

@Component({
    selector: 'xiv-summary-header',
    templateUrl: './summary-header.component.html'
})
export class SummaryHeaderComponent implements OnInit {
    // Group given to the 1st summary line
    allData: DataGroup;
    hideOverall: boolean = false;

    // Group given to the 2nd summary line
    group: DataGroup;
    hideGroup: boolean = false;

    // Actions available when right clicking either bar
    contextMenuItems: MenuItem[] = [
        {
            label: 'Hide Overall',
            command: this.toggleOverall.bind(this),
            state: { hide: false }
        }, {
            label: 'Hide Group Line',
            command: this.toggleGroup.bind(this)
        }
    ];

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.allData = this.svcData.data;
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            this.group = (group instanceof DataGroup) ? group : null;

            if(!this.group?._parent) {
                // Overall can't be hidden if there is no sub group
                this.hideOverall = false;
            }
            else {
                // Reapply overall as hidden if it was before navigating to the overall page
                this.hideOverall = this.contextMenuItems[Lines.Overall].state.hide;
            }

            this.updateContextMenuItems();
        });
    }

    toggleOverall(): void {
        this.hideOverall = !this.hideOverall;
        this.contextMenuItems[Lines.Overall].state = { hide: this.hideOverall };
        this.updateContextMenuItems();
    }

    toggleGroup(): void {
        this.hideGroup = !this.hideGroup;
        this.updateContextMenuItems();
    }

    updateContextMenuItems(): void {
        const overall = this.contextMenuItems[Lines.Overall];
        const group = this.contextMenuItems[Lines.Group];

        // Overall
        overall.label = this.hideOverall ? 'Show Overall Line' : 'Hide Overall Line';
        overall.disabled = this.hideGroup;

        // Group
        group.label = this.hideGroup ? 'Show Group Line' : 'Hide Group Line';
        group.disabled = this.hideOverall;

        // Force pContextMenu to update
        this.contextMenuItems = [...this.contextMenuItems];
    }
}
