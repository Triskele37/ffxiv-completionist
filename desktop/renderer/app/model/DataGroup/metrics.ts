import type { DataGroup } from './index';
import { getEffectiveTotal, getCompleted, getRemaining } from './counts';

export function getPercentComplete(group: DataGroup, force: boolean = false): string | null {
    const effectiveTotal = getEffectiveTotal(group, force);
    if(effectiveTotal === 0) return null;

    const completed = getCompleted(group, force);

    const num = ((completed / effectiveTotal) * 100);
    const str = num.toString().match(/^\d+\.?\d{0,2}/)?.[0] || '0.00';
    return str.includes('.') ? str : `${str}.00`;
}

export function isComplete(group: DataGroup, force: boolean = false): boolean {
    return getPercentComplete(group, force) === '100.00';
}

export function isEmpty(group: DataGroup, force: boolean = false): boolean {
    return getRemaining(group, force) === 0;
}
