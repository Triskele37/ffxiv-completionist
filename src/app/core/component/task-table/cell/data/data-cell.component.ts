import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { Column } from '@model/Column';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { DataService } from '@data';

type LinkData = {
    value: DataGroup | Task | string;
    type: 'Group' | 'Task' | 'Value';
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
        if(this.column.link && pathOrValue?.includes('.')) {
            const content = this.svcData.data.getChild(pathOrValue) || pathOrValue;
            const isGroup = content instanceof DataGroup;
            const isTask = content instanceof Task;

            return {
                value: content,
                type: isGroup ? 'Group' : isTask ? 'Task' : 'Value'
            };
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
