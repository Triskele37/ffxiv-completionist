import { NgModule, Pipe, PipeTransform } from '@angular/core';

/** Utility pipe to force string type in template
 * Use to prevent build errors
 * */
@Pipe({ name: 'asString' })
export class AsStringPipe implements PipeTransform {
    transform(value: any): string {
        return JSON.stringify(value);
    }
}

@NgModule({
    declarations: [AsStringPipe],
    exports: [AsStringPipe]
})
export class AsStringPipeModule {
}
