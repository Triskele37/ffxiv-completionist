import { Component, NgModule } from '@angular/core';

//------------------------------------------------------- Components
@Component({ selector: 'xiv-0-5-2', templateUrl: './0-5-2.html'})
export class Beta_0_5_2_Component {}

@Component({ selector: 'xiv-0-5-21', templateUrl: './0-5-21.html'})
export class Beta_0_5_21_Component {}

@Component({ selector: 'xiv-0-5-25', templateUrl: './0-5-25.html'})
export class Beta_0_5_25_Component {}

@Component({ selector: 'xiv-0-5-3', templateUrl: './0-5-3.html'})
export class Beta_0_5_3_Component {}

@Component({ selector: 'xiv-0-5-45', templateUrl: './0-5-45.html'})
export class Beta_0_5_45_Component {}

@Component({ selector: 'xiv-0-5-5', templateUrl: './0-5-5.html'})
export class Beta_0_5_5_Component {}

@Component({ selector: 'xiv-0-5-58', templateUrl: './0-5-58.html'})
export class Beta_0_5_58_Component {}

//------------------------------------------------------- Module
@NgModule({
    declarations: [
        Beta_0_5_2_Component,
        Beta_0_5_21_Component,
        Beta_0_5_25_Component,
        Beta_0_5_3_Component,
        Beta_0_5_45_Component,
        Beta_0_5_5_Component,
        Beta_0_5_58_Component,
    ]
})
export class BetaVersionsModule {}
