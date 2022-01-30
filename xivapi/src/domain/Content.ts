import * as fs from 'fs';
import * as path from 'path';

import { Lang } from '../constants';

type Excluded = {
    [id: string]: string;
};

type Diffs = {
    [id: string]: Diff[];
};

type Diff = {
    key: string;
    value: any;
};

type Config = {
    TOTAL_ITEMS: number;
    FAILED_IDS: number[];
};

export abstract class Content {
    //#region--------------------------------- Members
    dirname: string;

    // constants used for caching from XIVAPI
    config: Config;

    // excluded keys for each content with reasons as properties
    excludedIds: Excluded[];

    // Map of diffs to ignore with task id as keys
    knownDiffs: Diffs;

    // The content name relative to the app
    NAME: string;

    // The name of the xivapi content endpoint
    abstract API_ENDPOINT: string;

    // The location in "resources" to merge cache data into
    APP_PATH: string;

    // App task keys to consider when merging cache data into lang
    MERGE_KEYS: string[];

    // App task keys to consider when merging cache data into common
    COMMON_KEYS: string[];

    // Params to specify a subset of items within the content type
    filterParams: string;

    // Params to specify return properties on a single item
    columnParams: string;

    // Flag indicating how the next scrape for data is handled
    scrapeType: 'fail' | 'full' | 'new';

    //#endregion

    // Define chain key names in one place for use in COMMON_KEYS
    static CHAIN_KEYS = ['cSiblings'];

    protected constructor(dirname: string) {
        this.dirname = path.join('src', 'domain', dirname);
        this.config = JSON.parse(fs.readFileSync(`${this.dirname}/config.json`, 'utf8'));
        this.attachIfExists('excludedIds', 'excludedIds.json');
        this.attachIfExists('knownDiffs', 'knownDiffs.json');
    }

    get Name(): string {
        return this.NAME || this.API_ENDPOINT;
    }

    get hasCommonKeys(): boolean {
        return !!this.COMMON_KEYS?.length;
    }

    // Allows modification of the appPath
    getAppPath(appPath: string, cacheTask): string {
        return appPath;
    }

    // Builds the segments of the cache path using the XIVAPI object
    getCachePath<T_API>(apiTask: T_API): string[] {
        return [];
    }

    updateConfigFile(): void {
        fs.writeFileSync(
            `${this.dirname}/config.json`,
            JSON.stringify(this.config, null, 4)
        );
    }

    // Helper function for setup
    private attachIfExists(key: keyof Content, file: string): void {
        if(key === 'Name' || key === 'hasCommonKeys') return;

        const filePath = `${this.dirname}/${file}`;
        if(fs.existsSync(filePath)) {
            this[key] = filePath.includes('.json') ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : require(filePath);
        }
    }

    // Builds an XIVAPI content url for the given task id
    buildContentURL(id: string): string {
        let url = `http://xivapi.com/${this.API_ENDPOINT}/${id}`;
        if(this.columnParams) url += `?columns=${this.columnParams}`;
        return url;
    }
}

// Declaration merge to allow for optional abstract methods
export interface Content {
    // Converts a cached task into an app task
    mapAppTask?(cacheTask: any, lang: Lang): any;

    // Converts an app task key into a cache task key
    getCacheKey?(appKey: string, lang: Lang): string;

    // Converts an api task into a cache task
    mapCacheTask?(apiTask: any): any;

    // Determines if a built task should be excluded from merge
    excludeAppPathMerge?(appPath: string): boolean;
}
