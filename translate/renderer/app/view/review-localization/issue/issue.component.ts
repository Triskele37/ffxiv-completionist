import { Component, effect, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { DataService } from '@service/data.service';
import { NavigationService } from '@service/navigation.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'com-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.scss'],
    imports: [
        TranslatePipe,
        FormsModule,
    ]
})
export class IssueComponent {
    svcData = inject(DataService);
    svcNav = inject(NavigationService);

    translation: string = '';
	showSaved: boolean = false;

    constructor() {
        effect(() => {
            const issue = this.svcNav.currentIssue();
            this.translation = issue.newValue ?? '';
        });
    }

    onSaveTranslation(): void {
        const success = this.svcData.saveTranslation(this.svcNav.currentIndex(), this.translation);
        if(success) {
			this.translation = '';
			this.showSaved = true;
			setTimeout(() => this.showSaved = false, 3000);
		}
    }

    onRemoveTranslation(): void {
        const issue = this.svcNav.currentIssue();
        if(!issue.target) return;

        const success = this.svcData.saveTranslation(this.svcNav.currentIndex(), issue.target);
        if(success) this.translation = '';
    }
}
