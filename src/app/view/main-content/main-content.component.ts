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
    hasUnloadedComponent: boolean = false;
    @ViewChild(AnchorDirective, { static: false }) set anchor(ref: AnchorDirective) {
        if(!ref) return;
        this._anchor = ref;
        if(this.hasUnloadedComponent) this.loadComponent();
    };

    constructor(
        private cfr: ComponentFactoryResolver,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.svcNavigation.selectedGroup$.subscribe((selectedGroup) => {
            this.selectedGroup = selectedGroup;
            this.showAll = false;

            if(selectedGroup.isUiGroup) {
                this.isShowAllVisible = false;
                if(selectedGroup?.component) this.loadComponent();
            }
            else {
                this.isShowAllVisible = !!(selectedGroup?.subGroups && selectedGroup.columns);
            }
        });
    }

    toggleShowAll() {
        this.showAll = !this.showAll;
    }

    loadComponent() {
        if(this._anchor) {
            const { viewContainerRef } = this._anchor;
            viewContainerRef.clear();

            const componentFactory = this.cfr.resolveComponentFactory(this.selectedGroup.component);
            const component = viewContainerRef.createComponent(componentFactory);
            component.changeDetectorRef.detectChanges();
        }

        this.hasUnloadedComponent = !this._anchor;
    }
}
