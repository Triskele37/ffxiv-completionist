import { Component, inject } from '@angular/core';
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

    onSaveTranslation(): void {
        this.svcData.saveTranslation(this.svcNav.currentIndex(), this.translation);
    }
}
