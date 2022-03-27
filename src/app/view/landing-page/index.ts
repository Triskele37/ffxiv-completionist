import { Component, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-landing-page',
    templateUrl: './landing-page.html'
})
export class LandingPageComponent {
    constructor(private svcNavigation: NavigationService) {
    }

    onGuideClick(): void {
        this.svcNavigation.setBreadcrumbs(['main-menu', 'guide']);
    }

    onPatchNotesClick(): void {
        this.svcNavigation.setBreadcrumbs(['main-menu', 'patch-notes']);
    }

    onCompletionClick(): void {
        this.svcNavigation.setBreadcrumbs(['overall']);
    }
}

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        TranslateModule,
        ButtonModule
    ],
    exports: [
        LandingPageComponent
    ]
})
export class LandingPageModule {}
