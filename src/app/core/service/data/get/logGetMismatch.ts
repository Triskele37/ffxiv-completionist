import { DataServiceContext } from '../types';

/**
 * Check if path ends with
 * */
export function logGetMismatch(
    this: DataServiceContext,
    expectedType: string,
    receivedType: string,
    path: string,
    target: string = '<error>',
): void {
    console.error(`Retrieved ${receivedType} at "${path}" when looking for ${expectedType} "${target}"`);
}
