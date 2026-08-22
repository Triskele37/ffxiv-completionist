import { Component, effect, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';

import { DataGroup } from '@model/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

/**
 * The navigation bar active in the main view
 * */
@Component({
    selector: 'com-show-all-toggle',
    templateUrl: './show-all-toggle.component.html',
    imports: [
        ButtonDirective,
        Tooltip,
        TranslatePipe,
    ]
})
export class ShowAllToggleComponent {
    isShowAllVisible = signal(false);

    constructor(public svcNavigation: NavigationService) {
        effect(() => {
            this.onSelectedGroupChange(this.svcNavigation.selectedGroup());
        });
    }

    onSelectedGroupChange(selectedGroup: DataGroup | null): void {
        if(!selectedGroup) return;

        const { isUiGroup, isBookmarkGroup } = selectedGroup;
        if(isUiGroup || isBookmarkGroup) {
            this.isShowAllVisible.set(false);
        } else {
            this.isShowAllVisible.set(!!(selectedGroup.subGroups && selectedGroup.columns));
        }

        this.emitShowAllChange(false);
    }

    emitShowAllChange(value: boolean): void {
        this.svcNavigation.allTaskViewEnabled.set(value);
    }
}
