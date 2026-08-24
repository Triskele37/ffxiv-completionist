import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
    transform(value: string, minValue: number, maxValue: number): string {
        const totProg = maxValue - minValue;
        let prog = parseFloat(value) - minValue;
        if(prog < 0) prog = 0;
        if(prog > totProg) prog = totProg;

        const num = (prog / totProg) * 100;
        const str = num.toString().match(/^\d+\.?\d{0,2}/)?.[0] || '0.00';
        return str.includes('.') ? str : `${str}.00`;
    }
}
