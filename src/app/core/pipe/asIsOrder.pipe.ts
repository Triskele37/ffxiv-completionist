import { NgModule, Pipe, PipeTransform } from '@angular/core';

// Force "keyvalue" pipe to respect Map order
@Pipe({ name: 'asIsOrder' })
export class AsIsOrderPipe implements PipeTransform {
    transform(a, b): number {
        return 1;
    }
}

@NgModule({
    declarations: [AsIsOrderPipe],
    exports: [AsIsOrderPipe]
})
export class AsIsOrderPipeModule {
}
