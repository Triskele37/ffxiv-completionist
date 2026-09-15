import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
    selector: '[anchor]',
})
export class AnchorDirective {
    viewContainerRef = inject(ViewContainerRef);
}
