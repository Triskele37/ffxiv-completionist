import type { DataService } from '../data-service';

const PATH_REGEX = /^[a-z-.!,]+$/;

/**
 * Log a .get miss if the path is valid
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function logGetMiss(service: DataService) {
    return (
        expectedType: string,
        path: string,
        target: string = '<error>',
    ): void => {
        if(path.match(PATH_REGEX)) {
            console.error(`Invalid ${expectedType} path "${path}" from source "${target}"`);
        }
    };
}
