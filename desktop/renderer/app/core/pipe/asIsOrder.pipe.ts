import type { KeyValue } from '@angular/common';
import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

// Force "keyvalue" pipe to respect Map order
@Pipe({
    name: 'asIsOrder'
})
export class AsIsOrderPipe implements PipeTransform {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform<K, V>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
        return 0;
    }
}
