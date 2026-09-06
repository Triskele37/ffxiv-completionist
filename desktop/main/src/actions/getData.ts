import { JsonCache } from '../../../common/JsonCache';
import { JSON_CACHE } from './preloadJson';

/**
 * Simple handoff of cached data to renderer
 */
export function getData(): JsonCache {
    return JSON_CACHE;
}
