import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { SelectComponent } from '../../component/select/select.component';
import { DataService } from '@service/data.service';
import { NavigationService } from '@service/navigation.service';

@Component({
    selector: 'com-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    imports: [
        TranslatePipe,
        NgClass,
        NgTemplateOutlet,

        SelectComponent,
    ]
})
export class FiltersComponent {
    svcData = inject(DataService);
    svcNav = inject(NavigationService);

    visible: boolean = false;

    onSelectGroup($event: string): void {
        this.svcNav.jumpToGroup($event);
    }
}
