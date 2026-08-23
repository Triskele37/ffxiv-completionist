import type { OnChanges, SimpleChanges} from '@angular/core';
import { Component, Input, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@service/data/data-service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import type { Link } from '@model/Chain/ChainLink';
import type { Task } from '@model/Task';
import { getChild } from '@service/data/get/getChild';

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

    ngOnChanges(changes: SimpleChanges) {
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
            if(cPrev) this.addChildTaskBefore(cPrev, { key: cPrevAny ? 'ANY' : undefined });
            if(cPrevAt) {
                for(const k in cPrevAt) {
                    this.addChildTaskBefore(cPrevAt[k], { at: k });
                }
            }

            if(cUnlock) this.addChildTaskBefore(cUnlock, { key: 'UNLOCK' });
        }

        if(this.direction === 'root') {
            const { cSiblings, cSiblingsAt, cExclude } = task;
            if(cSiblings) this.addChildTaskAbove(cSiblings);
            if(cSiblingsAt) {
                for(const k in cSiblingsAt) {
                    this.addChildTaskAbove(cSiblingsAt[k], { at: k });
                }
            }
            if(cExclude) this.addChildTaskBelow(cExclude);
        }

        if(this.direction !== 'left') {
            const { cNext, cNextAt, cCombo, cComboAt, cUnlocks } = task;
            if(cNext) this.addChildTaskAfter(cNext);
            if(cNextAt) {
                for(const k in cNextAt) {
                    this.addChildTaskAfter(cNextAt[k], { at: k });
                }
            }

            if(cCombo) this.addChildTaskAfter(cCombo, { key: 'COMBO' });
            if(cComboAt) {
                for(const k in cComboAt) {
                    this.addChildTaskAfter(cComboAt[k], {key: 'COMBO', at: k });
                }
            }

            if(cUnlocks) this.addChildTaskAfter(cUnlocks, { key: 'UNLOCK' });
        }
    }

    addChildTaskBefore(linkOrLinks: Link | Link[], modifier?: Modifier): void {
        const nodes = this.getLinkedNodes(linkOrLinks, true, modifier);
        this.chainGraphPrev.push(...nodes);
    }

    addChildTaskAbove(linkOrLinks: Link | Link[], modifier?: Modifier): void {
        const nodes = this.getLinkedNodes(linkOrLinks, false, modifier);
        this.chainGraphSiblings.push(...nodes[0]);
    }

    addChildTaskBelow(linkOrLinks: Link | Link[], modifier?: Modifier): void {
        const nodes = this.getLinkedNodes(linkOrLinks, false, modifier);
        this.chainGraphExcludes.push(...nodes[0]);
    }

    addChildTaskAfter(linkOrLinks: Link | Link[], modifier?: Modifier): void {
        const nodes = this.getLinkedNodes(linkOrLinks, false, modifier);
        this.chainGraphNext.push(...nodes);
    }

    getLinkedNodes(linkOrLinks: Link | Link[], unshift: boolean, modifier?: Modifier): ChainNode[][] {
        const nodeGroups: ChainNode[][] = [];

        if(Array.isArray(linkOrLinks)) {
            const nodeGroup: ChainNode[] = [];
            linkOrLinks.forEach((link) => {
                if(typeof link === 'string') {
                    const content = getChild(this.svcData.data, link);
                    if(content?.dataType === 'Task') {
                        nodeGroup.push({ task: content, modifier });
                    }
                }
                else {
                    const task = this.task._parent.tasks.find((t) => t.id === link);
                    if(task) nodeGroup.push({ task, modifier });
                }
            });
            if(unshift) nodeGroups.unshift(nodeGroup);
            else nodeGroups.push(nodeGroup);
        }
        else if(typeof linkOrLinks === 'string') {
            const content = getChild(this.svcData.data, linkOrLinks);
            if(content?.dataType === 'Task') {
                const nodeGroup = [{ task: content, modifier }];
                if(unshift) nodeGroups.unshift(nodeGroup);
                else nodeGroups.push(nodeGroup);
            }
        }
        else {
            const task = this.task._parent.tasks.find((t) => t.id === linkOrLinks);
            if(task) {
                const nodeGroup = [{ task, modifier }];
                if(unshift) nodeGroups.unshift(nodeGroup);
                else nodeGroups.push(nodeGroup);
            }
        }

        return nodeGroups;
    }

    toggleSiblingExclude(): void {
        this.showSiblings = !this.showSiblings;
    }
}
