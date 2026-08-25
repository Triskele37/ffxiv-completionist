import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { DataService } from '@service/data.service';

@Component({
    selector: 'com-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    imports: [
        TranslatePipe,
        NgClass,
        NgTemplateOutlet,
    ]
})
export class FiltersComponent {
    svcData = inject(DataService);

    visible: boolean = true;
}
