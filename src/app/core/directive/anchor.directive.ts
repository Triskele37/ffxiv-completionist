import { Directive, NgModule, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[anchor]',
})
export class AnchorDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}

@NgModule({
    declarations: [AnchorDirective],
    exports: [AnchorDirective]
})
export class AnchorDirectiveModule {
}
