import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { DataService } from '@data';

type LinkData = DataGroup | Task | string;

@Component({
    selector: 'xiv-links-cell',
    templateUrl: './links-cell.component.html',
    styleUrls: ['./links-cell.component.scss']
})
export class LinksCellComponent implements OnChanges {
    @Input() linkPaths: string | string[];
    links: LinkData[] = [];

    isOverlayLocked: boolean = false;
    @ViewChild('linkOverlay') linkOverlay: OverlayPanel;

    constructor(private svcData: DataService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.linkPaths?.currentValue) {
            this.compileLinks();
        }
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
        if(Array.isArray(this.linkPaths)) {
            this.links = this.linkPaths.map((path) => this.getLinkFromPath(path));
        }
        else {
            this.links = [this.getLinkFromPath(this.linkPaths)];
        }

        this.links = this.links.filter((l) => !!l);
    }

    getLinkFromPath(pathOrValue: string): LinkData {
        if(pathOrValue?.includes('.')) {
            return this.svcData.data.getChild(pathOrValue) || pathOrValue;
        }
        else {
            // parameter is a raw value
            return pathOrValue;
        }
    }

    //#endregion

}
