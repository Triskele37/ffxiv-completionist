import { Component, signal, effect, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Badge } from 'primeng/badge';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { Popover } from 'primeng/popover';

import { DataService } from '@service/data/data-service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { ChainService } from '@service/chain/chain.service';
import type { ChainedGroup } from '@service/chain/types';
import { ButtonGroup } from 'primeng/buttongroup';

@Component({
    selector: 'com-chain-overlay',
    templateUrl: './chain-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './chain-overlay.component.scss'
    ],
    imports: [
        NgClass,
        NgTemplateOutlet,
        TranslatePipe,
        NgIcon,
        Badge,
        ButtonDirective,
        ContentLinkComponent,
        Divider,
        Popover,
        ButtonGroup
    ]
})
export class ChainOverlayComponent {
    private svcData = inject(DataService);
    svcChain = inject(ChainService);

    undoVerified = signal(false);
    doNotify = signal(false);

    constructor() {
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

    onMouseEnter(): void {
        this.doNotify.set(false);
    }

    onToggleShowChainedGroup(group: ChainedGroup): void {
        group.show = !group.show;
    }

    onUndoLastChain(confirmed?: boolean): void {
        // Allow for oopsie clicks
        if(confirmed === undefined) {
            this.undoVerified.set(true);
            return;
        }

        this.undoVerified.set(false);

        if(!confirmed) return;

        // Fire undo and apply changes to save
        this.svcChain.undoCurrentChain();
        this.svcData.dataToStore();
    }

}
