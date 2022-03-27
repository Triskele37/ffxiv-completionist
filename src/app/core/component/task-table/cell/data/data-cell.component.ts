import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild
} from '@angular/core';

import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-data-cell',
    templateUrl: './data-cell.component.html',
    styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnChanges, OnDestroy {
    @Input() task: Task;
    @Input() key: string = '';
    @Input() value: string;

    tooltip: string;

    constructor(private cdr: ChangeDetectorRef) {
        this.createObserver();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task || changes.key) {
            this.shouldDetectOverflow = true;
            this.detectOverflow();
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

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
                this.tooltip = this.task ? this.task[this.key] : this.value;
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
