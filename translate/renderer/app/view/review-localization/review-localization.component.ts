import { Component, inject } from '@angular/core';

import { DataService } from '@service/data.service';
import { NavigationService } from '@service/navigation.service';

import { IssueComponent } from './issue/issue.component';
import { IgnoreReasonsComponent } from './ignore-reasons/ignore-reasons.component';

@Component({
    selector: 'com-review-localization',
    templateUrl: './review-localization.component.html',
    styleUrls: ['./review-localization.component.scss'],
    imports: [
        IssueComponent,
        IgnoreReasonsComponent,
    ]
})
export class ReviewLocalizationComponent {
    svcData = inject(DataService);
    svcNav = inject(NavigationService);
}
