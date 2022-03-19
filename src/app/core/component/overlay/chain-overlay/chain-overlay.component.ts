import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { DataService } from '@data';
import { NavigationService } from '@service/navigation/navigation.service';
import { ChainService } from '@service/chain/chain.service';
import { ChainedGroup, ChainStart } from '@service/chain/types';

@Component({
    selector: 'xiv-chain-overlay',
    templateUrl: './chain-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './chain-overlay.component.scss'
    ]
})
export class ChainOverlayComponent implements OnInit, OnChanges, OnDestroy {
    @Input() disableUndo: boolean;
    @ViewChild('overlayPanel') overlayPanel: OverlayPanel;
    isVisible: boolean = false;

    undoVerified: boolean = false;
    doNotify: boolean = false;

    chainedTaskCount: number;
    chainedGroups: ChainedGroup[];
    chainStart: ChainStart;

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService,
        private svcChain: ChainService,
    ) {
    }

    //#region------------------------------------------------------- Life-cycle
    ngOnInit() {
        this.svcChain.chainedTaskCount$.subscribe((count) => {
            this.chainedTaskCount = count;
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

    ngOnChanges(changes: SimpleChanges) {
        this.svcChain.setHistoryDisabled(!!changes.disableUndo.currentValue);
    }

    ngOnDestroy() {
        this.svcChain.setHistoryDisabled(false);
    }

    //#endregion

    //#region------------------------------------------------------- Template Actions
    onMouseEnter(): void {
        this.isVisible = true;
        this.doNotify = false;
    }

    onMouseLeave(): void {
        this.isVisible = false;
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
    }

    //#endregion
}
