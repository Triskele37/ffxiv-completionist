import { HostListener } from '@angular/core';
import { Component, ElementRef, inject, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import type { Column } from '@model/Column';
import type { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

import type { LinkData } from '../LinkData';

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
    elementRef = inject(ElementRef);
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;
    @Input({ required: true }) task!: Task;
    @Input({ required: true }) value!: LinkData;

    tooltip = signal<string | undefined>(undefined);

    get observerTarget(): HTMLElement {
        return this.elementRef.nativeElement.firstChild;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.updateTooltip();
    }

    updateTooltip(): void {
        if(this.value.type !== 'Value') {
            if(this.tooltip()) this.tooltip.set(undefined);
            return;
        }

        const { clientWidth, scrollWidth } = this.observerTarget;
        const overflows = clientWidth !== scrollWidth;
        this.tooltip.set(overflows ? this.value.value : undefined);
    }

}
