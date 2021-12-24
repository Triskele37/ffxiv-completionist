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
    //TODO: allData: data
    selectedGroup: DataGroup;
    showAll: boolean = false;
    isShowAllVisible: boolean = false;

    _anchor: AnchorDirective;
    @ViewChild(AnchorDirective, { static: false }) set anchor(ref: AnchorDirective) {
        if(!ref) return;
        this._anchor = ref;

        this.loadComponent();
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
            this.isShowAllVisible = !!selectedGroup?.subGroups?.columnConfig;

            if(selectedGroup?.component) this.loadComponent();
        });
    }

    toggleShowAll() {
        this.showAll = !this.showAll;
    }

    loadComponent() {
        if(this._anchor) {
            const componentFactory = this.cfr.resolveComponentFactory(this.selectedGroup.component);
            const { viewContainerRef } = this._anchor;
            viewContainerRef.clear();
            const component = viewContainerRef.createComponent(componentFactory);
            component.changeDetectorRef.detectChanges();
        }
        else {
            setTimeout(this.loadComponent.bind(this), 100);
        }
    }
}
