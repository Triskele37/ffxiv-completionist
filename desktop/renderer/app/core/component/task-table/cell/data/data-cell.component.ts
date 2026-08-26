import type { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Popover } from 'primeng/popover';

import { DataService } from '@service/data/data-service';
import type { Column } from '@model/Column';
import type { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

import { CellValueComponent } from './cell-value/cell-value.component';
import type { LinkData } from './LinkData';

const PRE_LINK_POST_REGEX = /^([^.]*)\b([a-z]+[a-z0-9-]*\.[a-z0-9-.]+)\b([^.]*)$/;

/**
 * Container for cell-value
 * - Determines if value is single or contained in a View All overlay
 * - Generates tooltip for single values that overflow
 * */
@Component({
    selector: 'com-data-cell',
    templateUrl: './data-cell.component.html',
    styleUrls: ['./data-cell.component.scss'],
    imports: [
        ButtonDirective,
        Popover,
        TranslatePipe,

        CellValueComponent
    ]
})
export class DataCellComponent implements OnChanges {
    private svcData = inject(DataService);
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;
    @Input({ required: true }) task!: Task;
    @Input() value?: string;

    tooltip: string | undefined;

    // Compiled links for the task at column
    links: LinkData[] = [];

    isOverlayLocked: boolean = false;
    @ViewChild('linkPopover') linkPopover: Popover | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task?.currentValue) {
            this.compileLinks();
        }
    }

    //#region------------------------------------------------------- Events
    onMultiLinkLeave(): void {
        if(this.isOverlayLocked) return;
        this.linkPopover?.hide();
    }

    onOverlayLeave(): void {
        this.isOverlayLocked = false;
        this.linkPopover?.hide();
    }

    onLockOverlayClick(): void {
        this.isOverlayLocked = !this.isOverlayLocked;
    }

    //#endregion

    getCellValues() {
        const values = [].concat(this.task?.[this.column.key] ?? this.value);
        return this.column.oneLineTextList ? [values.join(', ')] : values;
    }

    //#region------------------------------------------------------- Update
    compileLinks(): void {
        if(this.column.taskLink) {
            this.links = [{ value: this.task, type: 'Task' }];
        }
        else {
            this.links = this.getCellValues().map((v) => this.getLinkFromPath(v));
            this.links = this.links.filter((l) => l.value);
        }
    }

    getLinkFromPath(pathOrValue: string): LinkData {
        if(this.column.link && pathOrValue) {
            const [, pre, link, post] = pathOrValue.match(PRE_LINK_POST_REGEX) ?? [];

            if(link) {
                const content = this.svcData.get.getChild(this.svcData.data, link);
                const linkData: Partial<LinkData> = {};

                if(content) {
                    linkData.value = content;
                    linkData.type = content.dataType;
                    if(pre) linkData.pre = pre;
                    if(post) linkData.post = post;
                    return linkData as LinkData;
                }
                else {
                    return { value: pathOrValue, type: 'Value' };
                }
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

}
