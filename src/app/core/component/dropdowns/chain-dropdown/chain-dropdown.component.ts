import { Component, Input, OnInit } from '@angular/core';

import { NavigationService } from '@service/navigation/navigation.service';
import { ChainService } from '@service/chain/chain.service';
import { StoreService } from '@service/store/store.service';

@Component({
    selector: 'xiv-chain-dropdown',
    templateUrl: './chain-dropdown.component.html',
    styleUrls: ['./chain-dropdown.component.scss']
})
export class ChainDropdownComponent implements OnInit {
    @Input() disableUndo: boolean;

    dropdownOpen = false;
    undoNotClicked = false;
    doNotify = false;

    chainedTaskCount;
    chainedTasks;
    chainStart;

    constructor(
        private svcNavigation: NavigationService,
        private svcChain: ChainService,
        private svcStore: StoreService,
    ) {
    }

    ngOnInit() {
        this.svcChain.chainedTaskCount$.subscribe((count) => {
            this.chainedTaskCount = count;
        });

        this.svcChain.chainedTasks$.subscribe((tasks) => {
            this.chainedTasks = tasks;

            this.undoNotClicked = true;
            this.doNotify = !!Object.keys(this.chainedTasks).length;
        });

        this.svcChain.chainStart$.subscribe((task) => {
            this.chainStart = task;
        });
    }

    groupChainLength(group) {
        return !group ? 0 : Object.keys(group).length;
    }

    onToggleShowChainedGroup(group) {
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

        //TODO this.$forceUpdate();
    }

    onNavigateToGroup(path) {
        let safePath = path.split(' > ');
        if(safePath[0] !== 'Overall') safePath = ['Overall', ...safePath];

        this.svcNavigation.setBreadcrumbs(safePath);
    }

    onUndoLastChain() {
        // Allow for oopsie clicks
        if(this.undoNotClicked) {
            this.undoNotClicked = false;
            return;
        }
        this.undoNotClicked = true;
        this.dropdownOpen = false;

        // Do the actual undo
        this.chainStart.task.setCompletionFlag(this.chainStart.fromFlag);
        for(const groupPath in this.chainedTasks) {
            if(this.chainedTasks.hasOwnProperty(groupPath)) {
                for(const id in this.chainedTasks[groupPath]) {
                    if(this.chainedTasks[groupPath].hasOwnProperty(id)) {
                        const change = this.chainedTasks[groupPath][id];
                        change.task.setCompletionFlag(change.fromFlag);
                    }
                }
            }
        }

        // Commit the undo to Vuex and store
        this.svcChain.clearChain();
        this.svcStore.applyDataToStore();
    }
}
