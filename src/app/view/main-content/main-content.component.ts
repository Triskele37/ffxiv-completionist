import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';

import { AnchorDirective } from '@directive/anchor.directive';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
    selectedGroup: DataGroup;

    constructor(
        private cdr: ChangeDetectorRef,
        private cfr: ComponentFactoryResolver,
        public svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.svcNavigation.selectedGroup$.subscribe((selectedGroup) => {
            this.footerHeight = 0;
            const refExists = !!this.selectedGroup?.component;
            this.selectedGroup = selectedGroup;

            if(selectedGroup.isUiGroup) {
                // When the previous selectedGroup had a custom component, load immediately
                // Otherwise rely on 'set anchor' to load the component
                if(refExists && selectedGroup.component) {
                    this.loadComponent();
                }
            }
        });
    }

    ngOnDestroy(): void {
        this.summaryObserver?.disconnect();
    }

    //#region------------------------------------------------------- Dynamic Scroll Height
    footerHeight: number = 0;
    summaryObserver: ResizeObserver;

    @ViewChild('groupSummary', { static: false }) set groupSummary(ref: ElementRef) {
        if(!ref) {
            this.footerHeight = 0;
            this.summaryObserver?.disconnect();
            this.cdr.detectChanges();
            return;
        }

        this.summaryObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                this.footerHeight = entry.contentRect?.height || 0;
            });

            this.cdr.detectChanges();
        });

        this.summaryObserver.observe(ref.nativeElement);
    }

    //#endregion

    //#region------------------------------------------------------- Dynamic Component
    _anchor: AnchorDirective;
    @ViewChild(AnchorDirective, { static: false }) set anchor(ref: AnchorDirective) {
        if(!ref) return;
        this._anchor = ref;

        // Custom components must be reloaded if this ref changes
        this.loadComponent();
    };

    // _anchor will be defined here based on how this function is called
    loadComponent(): void {
        const { viewContainerRef } = this._anchor;
        viewContainerRef.clear();

        const componentFactory = this.cfr.resolveComponentFactory(this.selectedGroup.component);
        const component = viewContainerRef.createComponent(componentFactory);
        component.changeDetectorRef.detectChanges();
    }

    //#endregion

}
