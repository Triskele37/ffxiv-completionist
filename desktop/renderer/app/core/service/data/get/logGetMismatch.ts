import type { DataService } from '../data-service';

/**
 * Check if path ends with
 * */
export function logGetMismatch(service: DataService) {
    return (
        expectedType: string,
        receivedType: string,
        path: string,
        target: string = '<error>',
    ): void => {
        console.error(`Retrieved ${receivedType} at "${path}" when looking for ${expectedType} "${target}"`);
    };
}
