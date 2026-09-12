import type { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@service/data/data-service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import type { Link } from '@model/Chain/ChainLink';
import type { Task } from '@model/Task';

type ChainNode = {
    task: Task;
    modifier?: Modifier;
};

type Modifier = {
    key?: string;
    at?: string;
};

// cExclusive

@Component({
    selector: 'com-chain-viewer-node',
    templateUrl: './chain-viewer-node.component.html',
    styleUrls: ['./chain-viewer-node.component.scss'],
    imports: [
        TranslatePipe,
        NgTemplateOutlet,
        NgIcon,
        ButtonDirective,
        Tooltip,
        ContentLinkComponent
    ]
})
export class ChainViewerNodeComponent implements OnChanges {
    private svcData = inject(DataService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) remainingDepth!: number;
    @Input({ required: true }) direction!: 'left' | 'root' | 'right';
    @Input() modifier?: Modifier;

    chainGraphPrev: ChainNode[][] = [];
    chainGraphNext: ChainNode[][] = [];
    chainGraphSiblings: ChainNode[] = [];
    chainGraphExcludes: ChainNode[] = [];

    showSiblings: boolean = true;

    ngOnChanges(changes: SimpleChanges<ChainViewerNodeComponent>): void {
        if(changes.task || changes.remainingDepth) this.setChainGraphs();
    }

    setChainGraphs() {
        if(this.remainingDepth === 0) return;
        this.chainGraphPrev = [];
        this.chainGraphNext = [];
        this.chainGraphSiblings = [];
        this.chainGraphExcludes = [];
        this.diveForChainGraph(this.task);
    }

    diveForChainGraph(task: Task): void {
        if(this.direction !== 'right') {
            const { cPrev, cPrevAny, cPrevAt, cUnlock } = task;
            if(cPrev) {
                this.addChildTaskBefore(task, cPrev, { key: cPrevAny ? 'ANY' : undefined });
            }
            if(cPrevAt) {
                for(const k in cPrevAt) {
                    this.addChildTaskBefore(task, cPrevAt[k], { at: k });
                }
            }

            if(cUnlock) {
                this.addChildTaskBefore(task, cUnlock, { key: 'UNLOCK' });
            }
        }

        if(this.direction === 'root') {
            const { cSiblings, cSiblingsAt, cExclude } = task;
            if(cSiblings) {
                this.addChildTaskAbove(task, cSiblings);
            }
            if(cSiblingsAt) {
                for(const k in cSiblingsAt) {
                    this.addChildTaskAbove(task, cSiblingsAt[k], { at: k });
                }
            }
            if(cExclude) {
                this.addChildTaskBelow(task, cExclude);
            }
        }

        if(this.direction !== 'left') {
            const { cNext, cNextAt, cCombo, cComboAt, cUnlocks } = task;
            if(cNext) {
                this.addChildTaskAfter(task, cNext);
            }
            if(cNextAt) {
                for(const k in cNextAt) {
                    this.addChildTaskAfter(task, cNextAt[k], { at: k });
                }
            }

            if(cCombo) {
                this.addChildTaskAfter(task, cCombo, { key: 'COMBO' });
            }
            if(cComboAt) {
                for(const k in cComboAt) {
                    this.addChildTaskAfter(task, cComboAt[k], { key: 'COMBO', at: k });
                }
            }

            if(cUnlocks) {
                this.addChildTaskAfter(task, cUnlocks, { key: 'UNLOCK' });
            }
        }
    }

    addChildTaskBefore(task: Task, linkOrLinks: Link | Link[], modifier?: Modifier): void {
        this.chainGraphPrev.push(this.getLinkedNodes(task, linkOrLinks, modifier));
    }

    addChildTaskAbove(task: Task, linkOrLinks: Link | Link[], modifier?: Modifier): void {
        this.chainGraphSiblings.push(...this.getLinkedNodes(task, linkOrLinks, modifier));
    }

    addChildTaskBelow(task: Task, linkOrLinks: Link | Link[], modifier?: Modifier): void {
        this.chainGraphExcludes.push(...this.getLinkedNodes(task, linkOrLinks, modifier));
    }

    addChildTaskAfter(task: Task, linkOrLinks: Link | Link[], modifier?: Modifier): void {
        this.chainGraphNext.push(this.getLinkedNodes(task, linkOrLinks, modifier));
    }

    getLinkedNodes(task: Task, linkOrLinks: Link | Link[], modifier?: Modifier): ChainNode[] {
        return this.svcData.get
            .getTasks(linkOrLinks, task)
            .map((chainedTask) => ({ task: chainedTask, modifier }));
    }

    toggleSiblingExclude(): void {
        this.showSiblings = !this.showSiblings;
    }
}
