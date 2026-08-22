import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';

import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'com-landing-page',
    templateUrl: './landing-page.html',
    styleUrls: ['./landing-page.scss'],
    imports: [
        ButtonDirective,
        TranslatePipe,
    ]
})
export class LandingPageComponent {
    private svcNavigation = inject(NavigationService);

    onPatchNotesClick(): void {
        this.svcNavigation.setBreadcrumbs(['main-menu', 'patch-notes']);
    }

    onCompletionClick(): void {
        this.svcNavigation.setBreadcrumbs(['overall']);
    }
}
