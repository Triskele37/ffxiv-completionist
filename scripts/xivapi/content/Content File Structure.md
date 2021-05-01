> Cache Properties  
> `config`: Houses constants used for caching from XIVAPI  
> `excludedIds`: Houses excluded keys for each content with reasons as properties  
> `build`: A callback that returns all of the content type built as an object  
> `getCachePath`: A callback that converts a cache path into an app path  
> `mapCacheTask`: Creates a cached task from an xivapi object  
> `getCacheKey`: Translates an `appKey` into a `cacheKey` using `lang`  

> App Properties  
> `MERGE_KEYS`: The keys to consider when merging content  
> `mergePathExcluded`: A callback that determines if a built task should be excluded from the app  
> `getAppPath`: A callback that helps build the cache path  
> `mapAppTask`: Creates an app task from `lang` and `cacheTask`  
