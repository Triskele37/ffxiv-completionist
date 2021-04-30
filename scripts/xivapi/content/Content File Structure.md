> Cache  
> `config`: Houses constants used for caching from XIVAPI

> Merge  
> `build`: A callback that returns all of the content type built as an object  
> `mapCacheTask`: Creates a cached task from an xivapi object  
> `mapAppTask`: Creates an app task from `lang` and `cacheTask`  

> Keys  
> `MERGE_KEYS`: The keys to consider when merging content  
> `getCacheKey`: Translates an `appKey` into a `cacheKey` using `lang`  

> Paths  
> `getCachePath`: A callback that converts a cache path into an app path  
> `getAppPath`: A callback that helps build the cache path  
