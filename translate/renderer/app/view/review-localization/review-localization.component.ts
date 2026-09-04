import { Component, HostListener, inject } from '@angular/core';

import { isIgnoredElement } from '@model/isIgnoredElement';
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

    // Arrow navigation
    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
		if(isIgnoredElement($event.target as HTMLElement)) return;
		
        if($event.ctrlKey) {
            if($event.key === 'ArrowLeft') {
                this.svcNav.goToPreviousIssue(10);
            }
            else if($event.key === 'ArrowRight') {
                this.svcNav.goToNextIssue(10);
            }
        }
        else {
            if($event.key === 'ArrowLeft') {
                this.svcNav.goToPreviousIssue();
            }
            else if($event.key === 'ArrowRight') {
                this.svcNav.goToNextIssue();
            }
        }
    }

}
