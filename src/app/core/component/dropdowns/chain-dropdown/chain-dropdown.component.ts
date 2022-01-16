import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { NavigationService } from '@service/navigation/navigation.service';
import { ChainService } from '@service/chain/chain.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { ChainedGroup, ChainedTasks, ChainStart } from '@service/chain/types';

@Component({
    selector: 'xiv-chain-dropdown',
    templateUrl: './chain-dropdown.component.html',
    styleUrls: [
        '../dropdown.scss',
        './chain-dropdown.component.scss'
    ]
})
export class ChainDropdownComponent implements OnInit {
    @Input() disableUndo: boolean;
    @ViewChild('overlayPanel') overlayPanel: OverlayPanel;
    isVisible: boolean = false;

    undoVerified: boolean = false;
    doNotify: boolean = false;

    chainedTaskCount: number;
    chainedTasks: ChainedTasks;
    chainStart: ChainStart;

    constructor(
        private svcNavigation: NavigationService,
        private svcChain: ChainService,
        private svcStore: SaveStoreService,
    ) {
    }

    ngOnInit() {
        this.svcChain.chainedTaskCount$.subscribe((count) => {
            this.chainedTaskCount = count;
        });

        this.svcChain.chainedTasks$.subscribe((tasks) => {
            this.chainedTasks = tasks;

            this.undoVerified = false;
            this.doNotify = !!Object.keys(this.chainedTasks).length;
        });

        this.svcChain.chainStart$.subscribe((task) => {
            this.chainStart = task;
        });
    }

    onMouseEnter(): void {
        this.isVisible = true;
        this.doNotify = false;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    groupChainLength(group: ChainedGroup): number {
        return !group ? 0 : Object.keys(group).length;
    }

    onToggleShowChainedGroup(group: ChainedGroup): void {
        if(group.show === undefined) {
            Object.defineProperty(group, 'show', {
                enumerable: false,
                writable: true,
                value: true
            });
        }
        else {
            group.show = !group.show;
        }
    }

    onNavigateToGroup(path: string): void {
        let safePath = path.split(' > ');
        if(safePath[0] !== 'Overall') safePath = ['Overall', ...safePath];

        this.svcNavigation.setBreadcrumbs(safePath);
    }

    onUndoLastChain(): number {
        // Allow for oopsie clicks
        this.undoVerified = !this.undoVerified;
        if(!this.undoVerified) return;
        this.isVisible = false;

        // Do the actual undo
        this.chainStart.task.setCompletion(this.chainStart.fromFlag);

        for(const groupPath in this.chainedTasks) {
            if(this.chainedTasks.hasOwnProperty(groupPath)) {
                for(const id in this.chainedTasks[groupPath]) {
                    if(this.chainedTasks[groupPath].hasOwnProperty(id)) {
                        const change = this.chainedTasks[groupPath][id];
                        change.task.setCompletion(change.fromFlag);
                    }
                }
            }
        }

        // Commit the undo to chain service and store
        this.svcChain.clearChain();
        this.svcStore.applyDataToStore();
    }
}
