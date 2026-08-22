import { Component, ElementRef, Input, signal, SimpleChanges, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { Column } from '@model/Column';
import { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

import { LinkData } from '../LinkData';

@Component({
    selector: 'com-cell-value',
    templateUrl: './cell-value.component.html',
    styleUrls: ['./cell-value.component.scss'],
    imports: [
        ContentLinkComponent,
        Tooltip,
        NgClass,
    ]
})
export class CellValueComponent {
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;
    @Input({ required: true }) task!: Task;
    @Input({ required: true }) value!: LinkData;

    tooltip = signal<string | undefined>(undefined);

    isTextOnly: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.column || changes.task) {
            const wasTextOnly = this.isTextOnly;

            this.setIsTextOnly();

            if(!wasTextOnly && this.isTextOnly) {
                this.createObserver();
                this.observeCellResize();
            }
            else if(wasTextOnly && !this.isTextOnly) {
                this.destroyObserver();
            }

            this.detectOverflow();
        }
    }

    ngOnDestroy(): void {
        this.destroyObserver();
    }

    setIsTextOnly() {
        this.isTextOnly = this.value.type === 'Value'
            && !this.column.groupLink
            && !this.column.taskLink;
    }

    //#region------------------------------------------------------- Ref
    ref: ElementRef | undefined;

    @ViewChild('cell') set cell(ref: ElementRef) {
        this.ref = ref;
        this.observeCellResize();
    }

    //#endregion

    //#region------------------------------------------------------- Resize Observer
    observer: ResizeObserver | undefined;

    createObserver(): void {
        if(this.observer) return;

        this.observer = new ResizeObserver(() => {
            if(this.isTextOnly) this.detectOverflow();
        });
    }

    destroyObserver(): void {
        this.observer?.disconnect();
        this.observer = undefined;
    }

    observeCellResize(): void {
        if(!this.isTextOnly || !this.ref) return;

        this.observer?.disconnect();
        this.observer?.observe(this.ref.nativeElement);
    }

    //#endregion

    //#region------------------------------------------------------- Tooltip
    detectOverflow(): void {
        if(!this.ref) return;

        const { clientWidth, scrollWidth } = this.ref.nativeElement;

        this.tooltip.set(
            clientWidth !== scrollWidth && typeof this.value.value === 'string' ?
                this.value.value : undefined
        );
    }

    //#endregion

}
