import type { WritableSignal} from '@angular/core';
import { Component, effect, signal, ViewChild, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { Divider } from 'primeng/divider';

import { SummaryLineComponent } from '@component/summary-line/summary-line.component';
import { TaskTableComponent } from '@component/task-table/task-table.component';
import { AnchorDirective } from '@directive/anchor.directive';
import type { DataGroup } from '@model/DataGroup';
import { AsIsOrderPipe } from '@pipe/asIsOrder.pipe';
import { ShouldShowSummaryGroupPipe } from '@pipe/should-show-group.pipe';
import { NavigationService } from '@service/navigation/navigation.service';
import { LandingPageComponent } from '@view/landing-page';
import { ShowAllTableComponent } from '@view/show-all-table/show-all-table.component';
import { getComponentFromToken } from '@view/getComponentFromToken';

@Component({
    selector: 'com-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
    imports: [
        Divider,
        KeyValuePipe,

        AnchorDirective,
        LandingPageComponent,
        ShouldShowSummaryGroupPipe,
        ShowAllTableComponent,
        SummaryLineComponent,
        TaskTableComponent,
    ]
})
export class MainContentComponent {
    svcNavigation = inject(NavigationService);

    previousSelectedGroup: WritableSignal<DataGroup | null> = signal(null);

    constructor() {
        effect(() => this.onSelectedGroupChange());
    }

    asIsOrder = AsIsOrderPipe.prototype.transform;

    onSelectedGroupChange() {
        const refExisted = !!this.previousSelectedGroup?.()?.component;
        this.previousSelectedGroup.set(this.svcNavigation.selectedGroup());

        if(this.svcNavigation.selectedGroup()?.isUiGroup) {
            // When the previous selectedGroup had a custom component, load immediately
            // Otherwise rely on 'set anchor' to load the component
            if(refExisted && this.svcNavigation.selectedGroup()?.component) {
                this.loadComponent();
            }
        }
    }

    //#region------------------------------------------------------- Dynamic Component
    _anchor?: AnchorDirective;
    @ViewChild(AnchorDirective, { static: false }) set anchor(ref: AnchorDirective) {
        if(!ref) return;
        this._anchor = ref;

        // Custom components must be reloaded if this ref changes
        this.loadComponent();
    };

    // _anchor will be defined here based on how this function is called
    loadComponent(): void {
        this._anchor?.viewContainerRef.clear();
        const comp = getComponentFromToken(this.svcNavigation.selectedGroup()?.component);

        if(!comp) {
            console.error(`Error: Invalid component token ${this.svcNavigation.selectedGroup()?.component}`);
            return;
        }

        const component = this._anchor?.viewContainerRef.createComponent(comp);
        component?.changeDetectorRef.detectChanges();
    }

    //#endregion

}
