import { ConfigObj } from '../../../common/Config';
import { isObj } from '../../../common/util';

/**
 * Recursively overwrite properties on `defaultConfig` with those
 * existing on `loadedConfig`
 * */
export function overwriteDefault(
    defaultConfig: ConfigObj | any,
    loadedConfig: ConfigObj | any,
): void {
    if(!defaultConfig || !loadedConfig) return;

    for(let key of Object.keys(defaultConfig) as (keyof ConfigObj)[]) {
        // key doesn't exist in saved config
        if(loadedConfig[key] === undefined) return;

        if(isObj(defaultConfig[key])) {
            overwriteDefault(defaultConfig[key], loadedConfig[key]);
        }
        else {
            let overwriteDefault = true;

            // Only overwrite default array config values if loaded config has items
            if(Array.isArray(loadedConfig[key])) {
                overwriteDefault = (loadedConfig[key] as any[]).length > 0;
            }

            if(overwriteDefault) defaultConfig[key] = loadedConfig[key];
        }
    }
}
