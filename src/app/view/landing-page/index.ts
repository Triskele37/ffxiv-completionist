import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'xiv-landing-page',
    templateUrl: './landing-page.html'
})
export class LandingPageComponent {}

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    exports: [
        LandingPageComponent
    ]
})
export class LandingPageModule {}
