import { DataServiceContext } from '../types';

const PATH_REGEX = /[a-z-.!,]*/;

/**
 * Log a .get miss if the path is valid
 * */
export function logGetMiss(
    this: DataServiceContext,
    expectedType: string,
    path: string,
    target: string = '<error>',
): void {
    if(path.match(PATH_REGEX)) {
        console.error(`Invalid ${expectedType} path "${path}" from source "${target}"`);
    }
}
