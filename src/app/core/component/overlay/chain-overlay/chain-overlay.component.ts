import { Component, Input, OnChanges, OnDestroy, SimpleChanges, signal, effect, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Badge } from 'primeng/badge';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@data';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { NavigationService } from '@service/navigation/navigation.service';
import { ChainService } from '@service/chain/chain.service';
import { ChainedGroup, ChainStart } from '@service/chain/types';

import { Overlay } from '../Overlay';

@Component({
    selector: 'com-chain-overlay',
    templateUrl: './chain-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './chain-overlay.component.scss'
    ],
    imports: [
        Badge,
        ButtonDirective,
        ContentLinkComponent,
        Divider,
        NgClass,
        Tooltip,
        TranslatePipe
    ]
})
export class ChainOverlayComponent extends Overlay implements OnChanges, OnDestroy {
    @Input() disableUndo?: boolean;

    undoVerified = signal(false);
    doNotify = signal(false);

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService,
        public svcChain: ChainService,
    ) {
        super();

        // Enable the badge notification when new chain occurs
        effect(() => {
            const chainedTaskCount = this.svcChain.chainedTaskCount();
            this.doNotify.set(chainedTaskCount > 0);
        });

        // Reset undo when group changes
        effect(() => {
            void this.svcChain.chainedGroups();
            this.undoVerified.set(false);
        });
    }

    //#region------------------------------------------------------- Life-cycle
    ngOnChanges(changes: SimpleChanges): void {
        this.svcChain.setHistoryDisabled(!!changes.disableUndo.currentValue);
    }

    ngOnDestroy(): void {
        this.svcChain.setHistoryDisabled(false);
    }

    //#endregion

    //#region------------------------------------------------------- Template Actions
    onMouseEnter(): void {
        super.onMouseEnter();
        if(this.isOverlayVisible()) this.doNotify.set(false);
    }

    onToggleShowChainedGroup(group: ChainedGroup): void {
        group.show = !group.show;
    }

    onNavigateToGroup(chain: ChainStart | ChainedGroup): void {
        const task = 'task' in chain ? chain.task : chain.tasks[0].task;
        const path = task.fullStorageKey.split('.');
        path.pop();
        this.svcNavigation.setBreadcrumbs(path);
    }

    onUndoLastChain(): void {
        // Allow for oopsie clicks
        if(!this.undoVerified()) {
            this.undoVerified.set(true);
            return;
        }

        this.undoVerified.set(false);

        // Fire undo and apply changes to save
        this.svcChain.undoCurrentChain();
        this.svcData.applyDataToStore();

        // Make sure the overlay doesn't stick open
        if(!this.isOverlayLocked()) this.hide();
    }

    //#endregion
}
