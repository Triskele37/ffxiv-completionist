import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

// Force "keyvalue" pipe to respect Map order
@Pipe({
    name: 'asIsOrder'
})
export class AsIsOrderPipe implements PipeTransform {
    transform<K, V>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
        return 0;
    }
}
