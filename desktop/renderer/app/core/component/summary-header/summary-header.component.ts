import type { OnInit } from '@angular/core';
import { Component, effect, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import type { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

import { SummaryLineComponent } from '@component/summary-line/summary-line.component';
import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

enum Lines {
    Game = 0,
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
    private svcTranslate = inject(TranslateService);
    private svcData = inject(DataService);
    svcNavigation = inject(NavigationService);

    // Group given to the 1st summary line
    allData: DataGroup | undefined;

    hideOverall = signal(false);
    hideGroup = signal(false);

    // Actions available when right clicking either bar
    contextMenuItems: MenuItem[] = [
        {
            label: this.svcTranslate.instant('APP.STATISTICS.HIDE_GAME'),
            command: this.toggleOverall.bind(this),
            state: { hide: false }
        }, {
            label: this.svcTranslate.instant('APP.STATISTICS.HIDE_GROUP'),
            command: this.toggleGroup.bind(this)
        }
    ];

    constructor() {
        effect(() => this.onSelectedGroupChange());
    }

    ngOnInit(): void {
        this.allData = this.svcData.data;
    }

    onSelectedGroupChange() {
        const group = this.svcNavigation.selectedGroup();

        if(!group?._parent || group.disableCompletion) {
            // Overall can't be hidden if there is no sub group
            this.hideOverall.set(false);
        }
        else {
            // Reapply game as hidden if it was before navigating to the game page
            this.hideOverall.set(this.contextMenuItems[Lines.Game].state?.hide);
        }

        this.updateContextMenuItems();
    }

    toggleOverall(): void {
        this.hideOverall.set(!this.hideOverall());
        this.contextMenuItems[Lines.Game].state = { hide: this.hideOverall() };
        this.updateContextMenuItems();
    }

    toggleGroup(): void {
        this.hideGroup.set(!this.hideGroup());
        this.updateContextMenuItems();
    }

    updateContextMenuItems(): void {
        const game = this.contextMenuItems[Lines.Game];
        const group = this.contextMenuItems[Lines.Group];

        // Overall
        game.disabled = this.hideGroup();
        game.label = this.hideOverall()
            ? this.svcTranslate.instant('APP.STATISTICS.SHOW_GAME')
            : this.svcTranslate.instant('APP.STATISTICS.HIDE_GAME');

        // Group
        group.disabled = this.hideOverall();
        group.label = this.hideGroup()
            ? this.svcTranslate.instant('APP.STATISTICS.SHOW_GROUP')
            : this.svcTranslate.instant('APP.STATISTICS.HIDE_GROUP');

        // Force pContextMenu to update
        this.contextMenuItems = [...this.contextMenuItems];
    }
}
