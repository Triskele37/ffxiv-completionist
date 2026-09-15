import type { DataService } from '../data-service';

/**
 * Check if path ends with
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
