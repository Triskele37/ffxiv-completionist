import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { DataService } from '@data';
import { NavigationService } from '@service/navigation/navigation.service';
import { ChainService } from '@service/chain/chain.service';
import { ChainedGroup, ChainStart } from '@service/chain/types';

import { Overlay } from '../Overlay';

@Component({
    selector: 'xiv-chain-overlay',
    templateUrl: './chain-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './chain-overlay.component.scss'
    ]
})
export class ChainOverlayComponent extends Overlay implements OnInit, OnChanges, OnDestroy {
    @Input() disableUndo: boolean;

    undoVerified: boolean = false;
    doNotify: boolean = false;

    chainedTaskCount: { count: number };
    chainedGroups: ChainedGroup[];
    chainStart: ChainStart;

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService,
        private svcChain: ChainService,
    ) {
        super();
    }

    //#region------------------------------------------------------- Life-cycle
    ngOnInit(): void {
        this.svcChain.chainedTaskCount$.subscribe((count) => {
            this.chainedTaskCount = { count };
            this.doNotify = count > 0;
        });

        this.svcChain.chainedGroups$.subscribe((groups) => {
            this.chainedGroups = groups;
            this.undoVerified = false;
        });

        this.svcChain.chainStart$.subscribe((task) => {
            this.chainStart = task;
        });
    }

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
        if(this.isVisible) this.doNotify = false;
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

    onUndoLastChain(): number {
        // Allow for oopsie clicks
        if(!this.undoVerified) {
            this.undoVerified = true;
            return;
        }

        this.undoVerified = false;

        // Fire undo and apply changes to save
        this.svcChain.undoCurrentChain();
        this.svcData.applyDataToStore();

        // Make sure the overlay doesn't stick open
        this.isVisible = false;
    }

    //#endregion
}
