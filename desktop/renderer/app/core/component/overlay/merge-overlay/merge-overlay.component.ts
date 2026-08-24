import { Component, Input, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { Divider } from 'primeng/divider';

import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { ContentLinkPipe } from '@pipe/content-link.pipe';
import { ChainService } from '@service/chain/chain.service';
import { DataService } from '@service/data/data-service';
import { SearchService } from '@service/search/search.service';
import type { Match } from '@service/search/SearchTypes';
import { CustomContentService } from '@service/custom-content/custom-content.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'com-merge-overlay',
    templateUrl: './merge-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './merge-overlay.component.scss'
    ],
    imports: [
        ButtonDirective,
        ButtonGroup,
        Divider,
        FormsModule,
        NgClass,
        TranslatePipe,

        ContentLinkPipe
    ]
})
export class MergeOverlayComponent extends Overlay {
    private svcData = inject(DataService);
    private svcChain = inject(ChainService);
    private svcSearch = inject(SearchService);
    svcCustomContent = inject(CustomContentService);

    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];
    isMergeVisible = signal(false);

    // Responsive merge process values
    isAutoMergeEnabled = signal(false);
    mergeMatches = signal<Match[]>([]);
    mergeTask = signal<Task>({} as Task);

    // Controller merge process values
    currentMergeIsFirstInChain: boolean = false;
    mergeIndex: number = 0;
    tasksToRemove: Task[] = [];

    onMouseEnter(): void {
        if(Overlay.anyOverlayLocked) return;
        if(!this.isMergeVisible()) this.isOverlayVisible.set(true);
    }

    modalNoNo($event: PointerEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
    }

    //#region------------------------------------------------------- Merge Group
    mergeCustomTasks(): void {
        // Don't merge without items
        if(this.group.tasks.length < 1) return;

        // Switch displayed overlay
        this.hide();
        this.isMergeVisible.set(true);

        // Search for matches and filter out matching itself
        this.mergeTask.set(this.group.tasks[this.mergeIndex]);
        this.mergeMatches.set(this.svcSearch
            .searchTasks(this.mergeTask().name, false, false)
            .filter((match) =>
                !match.task._parent.isBookmarkGroup &&
                !match.task._parent.isCustomGroup
            ));

        // Auto-merge single task matches
        if(this.isAutoMergeEnabled()) {
            setTimeout(() => {
                if(this.mergeMatches().length === 1) {
                    this.confirmCurrentMerge(this.mergeMatches()[0].task);
                }
                else {
                    this.goToNextMerge();
                }
            }, 50);
        }
        else {
            // Reset this flag
            this.currentMergeIsFirstInChain = true;
        }
    }

    autoMergeSingleMatches(): void {
        this.isAutoMergeEnabled.set(true);
        this.currentMergeIsFirstInChain = true;
        this.mergeCustomTasks();
    }

    goToNextMerge(): void {
        this.mergeIndex++;

        if(this.mergeIndex > this.group.tasks.length - 1) {
            this.isAutoMergeEnabled.set(false);
            this.exitMerge();
        }
        else this.mergeCustomTasks();
    }

    exitMerge(): void {
        this.isMergeVisible.set(false);
        this.mergeIndex = 0;
        this.svcData.apply.dataToStore();

        // Empty waiting store writes
        this.tasksToRemove.forEach((t) => {
            this.svcCustomContent.removeTaskFromStore(t);
        });
        this.tasksToRemove = [];
    }

    confirmCurrentMerge(match: Task): void {
        // Update the completion flag if it has changed
        if(match.completionFlag$() !== this.mergeTask().completionFlag$()) {
            this.currentMergeIsFirstInChain = !this.svcChain.current.changeCompletion(
                match,
                this.mergeTask().completionFlag$(),
                this.currentMergeIsFirstInChain
            ) && this.currentMergeIsFirstInChain;
        }

        this.svcCustomContent.removeTaskFromAppTree(this.group, this.mergeTask());
        this.tasksToRemove.push(this.mergeTask());

        // Offset index and goto next
        this.mergeIndex--;
        this.goToNextMerge();
    }

    //#endregion

}
