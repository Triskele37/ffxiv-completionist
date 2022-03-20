import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

import { AnchorDirective } from './anchor.directive';

@Component({
    selector: 'xiv-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    isShowAllVisible: boolean = false;
    showAll: boolean = false;

    selectedGroup: DataGroup;

    _anchor: AnchorDirective;
    @ViewChild(AnchorDirective, { static: false }) set anchor(ref: AnchorDirective) {
        if(!ref) return;
        this._anchor = ref;

        // Custom components must be reloaded if this ref changes
        this.loadComponent();
    };

    constructor(
        private cfr: ComponentFactoryResolver,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.svcNavigation.selectedGroup$.subscribe((selectedGroup) => {
            const refExists = !!this.selectedGroup?.component;
            this.selectedGroup = selectedGroup;
            this.showAll = false;

            if(selectedGroup.isUiGroup) {
                this.isShowAllVisible = false;

                // When the previous selectedGroup had a custom component, load immediately
                // Otherwise rely on 'set anchor' to load the component
                if(refExists && selectedGroup.component) {
                    this.loadComponent();
                }
            }
            else {
                this.isShowAllVisible = !!(selectedGroup?.subGroups && selectedGroup.columns);
            }
        });
    }

    toggleShowAll(): void {
        this.showAll = !this.showAll;
    }

    // _anchor will be defined here based on how this function is called
    loadComponent(): void {
        const { viewContainerRef } = this._anchor;
        viewContainerRef.clear();

        const componentFactory = this.cfr.resolveComponentFactory(this.selectedGroup.component);
        const component = viewContainerRef.createComponent(componentFactory);
        component.changeDetectorRef.detectChanges();
    }

}
