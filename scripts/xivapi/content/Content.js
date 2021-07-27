const fs = require("fs");

module.exports = class Content {
    dirname;
    config; // Houses constants used for caching from XIVAPI
    excludedIds; // Houses excluded keys for each content with reasons as properties

    NAME; // The content name relative to the app
    API_ENDPOINT; // The name of the xivapi content endpoint
    APP_PATH; // The location in "resources" to merge cache data into

    MERGE_KEYS; // App task keys to consider when merging cache data into lang
    COMMON_KEYS; // App task keys to consider when merging cache data into common

    filterParams; // Params to specify a subset of items within the content type
    columnParams; // Params to specify return properties on a single item

    // Define linked key names in one place for use in COMMON_KEYS
    static LINKED_KEYS = ["linkedSiblings"];

    constructor(dirname) {
        this.dirname = dirname;
        this.config = require(`${dirname}/config.json`);
        this.attachIfExists("excludedIds.json");

        this.attachIfExists("app/mapAppTask.js"); // Creates an app task from `lang` and `cacheTask`
        this.attachIfExists("app/getAppPath.js");
        this.attachIfExists("app/excludeAppPathMerge.js"); // Determines if a built task should be excluded from merge

        this.attachIfExists("cache/getCachePath.js");
        this.attachIfExists("cache/getCacheKey.js"); // Translates an `appKey` into a `cacheKey` using `lang`
        this.attachIfExists("cache/mapCacheTask.js"); // Creates a cached task from an XIVAPI object
    }

    get Name() {
        return this.NAME || this.API_ENDPOINT;
    }

    // Converts a cache path into an app path
    getAppPath(cachePath) {
        return cachePath;
    }

    // Builds the segments of the cache path using the XIVAPI object
    getCachePath(apiObject) {
        return [];
    }

    hasCommonKeys() {
        return this.COMMON_KEYS && this.COMMON_KEYS.length > 0;
    }

    updateConfigFile() {
        fs.writeFileSync(`${this.dirname}/config.json`, JSON.stringify(this.config, null, 4));
    }

    // Helper function for setup
    attachIfExists(file) {
        const path = `${this.dirname}/${file}`;

        if(fs.existsSync(path)) {
            const key = file.split(".")[0].split("/").reverse()[0];
            this[key] = path.includes(".json") ? JSON.parse(fs.readFileSync(path, "utf8")) : require(path);
        }
    }

    buildContentURL(id) {
        let url = `http://xivapi.com/${this.API_ENDPOINT}/${id}`;
        if(this.columnParams) url += `?columns=${this.columnParams}`;
        return url;
    }
};
