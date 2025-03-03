import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { DataService } from '@data';
import { Column } from '@model/Column';
import { DataGroup } from '@model/DataGroup';
import { getChild } from '@model/DataGroup/children/getChild';
import { Task } from '@model/Task';

type LinkData = {
    xivDataType?: 'LinkData';
    value: DataGroup | Task | string;
    type: 'Group' | 'Task' | 'Value';
    pre?: string; // Text before the link
    post?: string; // Text after the link
};

@Component({
    selector: 'xiv-data-cell',
    templateUrl: './data-cell.component.html',
    styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnChanges, OnDestroy {
    @Input() column: Column;
    @Input() task: Task;
    @Input() value: string;

    tooltip: string;

    // Compiled links for the task at column
    links: LinkData[] = [];

    isOverlayLocked: boolean = false;
    @ViewChild('linkOverlay') linkOverlay: OverlayPanel;

    constructor(
        private cdr: ChangeDetectorRef,
        private svcData: DataService
    ) {
        this.createObserver();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task?.currentValue) {
            this.compileLinks();
        }

        if(changes.column || changes.task) {
            this.shouldDetectOverflow = true;
            this.detectOverflow();
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    //#region------------------------------------------------------- Events
    onMultiLinkLeave(): void {
        if(this.isOverlayLocked) return;
        this.linkOverlay.hide();
    }

    onOverlayLeave(): void {
        this.isOverlayLocked = false;
        this.linkOverlay.hide();
    }

    onLockOverlayClick(): void {
        this.isOverlayLocked = !this.isOverlayLocked;
    }

    //#endregion

    //#region------------------------------------------------------- Update
    compileLinks(): void {
        const values = [].concat(this.task?.[this.column.key] ?? this.value);
        this.links = values.map((v) => this.getLinkFromPath(v));
        this.links = this.links.filter((l) => l.value);
    }

    getLinkFromPath(pathOrValue: string): LinkData {
        if(this.column.link && pathOrValue) {
            const segments = pathOrValue.split(' ');
            const linkRegex = /[a-z]+[a-z0-9-]*\.[a-z0-9-.]+/;
            const linkIndex = segments.findIndex((s) => s.match(linkRegex));

            if(linkIndex !== -1) {
                const rawLink = segments[linkIndex];
                const content = getChild(this.svcData.data, rawLink);
                const linkData: Partial<LinkData> = {};

                if(content?.xivDataType === 'Group') {
                    linkData.value = content;
                    linkData.type = 'Group'
                }
                else if(content?.xivDataType === 'Task') {
                    linkData.value = content;
                    linkData.type = 'Task';
                }
                else {
                    linkData.value = rawLink;
                    linkData.type = 'Value';
                }

                linkData.pre = segments.slice(0, linkIndex).join(' ');
                linkData.post = segments.slice(linkIndex + 1).join(' ');

                return linkData as LinkData;
            }
            else {
                return { value: pathOrValue, type: 'Value' };
            }
        }
        else {
            // parameter is a raw value
            return { value: pathOrValue, type: 'Value' };
        }
    }

    //#endregion

    //#region------------------------------------------------------- Ref
    ref: ElementRef;

    @ViewChild('cell') set cell(ref: ElementRef) {
        this.ref = ref;
        this.observeCellResize();
        this.detectOverflow();
    }

    //#endregion

    //#region------------------------------------------------------- Resize Observer
    observer: ResizeObserver;

    createObserver(): void {
        this.observer = new ResizeObserver(() => {
            this.shouldDetectOverflow = true;
            this.detectOverflow();
        });
    }

    observeCellResize(): void {
        // Cleanup
        this.observer?.disconnect();

        // Bail if no ref
        if(!this.ref) return;

        this.observer.observe(this.ref.nativeElement);
    }

    //#endregion

    //#region------------------------------------------------------- Tooltip
    shouldDetectOverflow: boolean;

    detectOverflow(): void {
        if(!this.ref) return;

        if(this.shouldDetectOverflow) {
            const { clientWidth, scrollWidth } = this.ref.nativeElement;

            if(clientWidth !== scrollWidth) {
                this.tooltip = this.task?.[this.column.key] ?? this.value;
            }
            else {
                this.tooltip = '';
            }

            this.shouldDetectOverflow = false;
            this.cdr.detectChanges();
        }
    }

    //#endregion

}
