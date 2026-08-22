import { Component, effect, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

import { SummaryLineComponent } from '@component/summary-line/summary-line.component';
import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

enum Lines {
    Overall = 0,
    Group = 1
}

@Component({
    selector: 'com-summary-header',
    templateUrl: './summary-header.component.html',
    imports: [
        ContextMenu,
        SummaryLineComponent
    ]
})
export class SummaryHeaderComponent implements OnInit {
    // Group given to the 1st summary line
    allData: DataGroup | undefined;

    hideOverall = signal(false);
    hideGroup = signal(false);

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
        public svcNavigation: NavigationService
    ) {
        effect(() => this.onSelectedGroupChange());
    }

    ngOnInit(): void {
        this.allData = this.svcData.data;
    }

    onSelectedGroupChange() {
        const group = this.svcNavigation.selectedGroup();

        if(!group?._parent) {
            // Overall can't be hidden if there is no sub group
            this.hideOverall.set(false);
        }
        else {
            // Reapply overall as hidden if it was before navigating to the overall page
            this.hideOverall.set(this.contextMenuItems[Lines.Overall].state?.hide);
        }

        this.updateContextMenuItems();
    }

    toggleOverall(): void {
        this.hideOverall.set(!this.hideOverall());
        this.contextMenuItems[Lines.Overall].state = { hide: this.hideOverall() };
        this.updateContextMenuItems();
    }

    toggleGroup(): void {
        this.hideGroup.set(!this.hideGroup());
        this.updateContextMenuItems();
    }

    updateContextMenuItems(): void {
        const overall = this.contextMenuItems[Lines.Overall];
        const group = this.contextMenuItems[Lines.Group];

        // Overall
        overall.label = this.hideOverall() ? 'Show Overall Line' : 'Hide Overall Line';
        overall.disabled = this.hideGroup();

        // Group
        group.label = this.hideGroup() ? 'Show Group Line' : 'Hide Group Line';
        group.disabled = this.hideOverall();

        // Force pContextMenu to update
        this.contextMenuItems = [...this.contextMenuItems];
    }
}
