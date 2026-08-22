import { DataGroup } from '../';
import { getEffectiveTotal, getCompleted, getRemaining } from './counts';

export function getPercentComplete(group: DataGroup): string | null {
    const effectiveTotal = getEffectiveTotal(group);
    if(effectiveTotal === 0) return null;

    const completed = getCompleted(group);

    const num = ((completed / effectiveTotal) * 100);
    const str = num.toString().match(/^\d+\.?\d{0,2}/)?.[0] || '0.00';
    return str.includes('.') ? str : `${str}.00`;
}

export function isComplete(group: DataGroup): boolean {
    return getPercentComplete(group) === '100.00';
}

export function isEmpty(group: DataGroup): boolean {
    return getRemaining(group) === 0;
}
