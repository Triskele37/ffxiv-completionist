import type { DataServiceContext } from '../types';
import { loadGroupShallow } from './loadGroupShallow';
import { loadGroupDeep } from './loadGroupDeep';
import { loadJson } from './loadJson';
import { shouldTranslate } from './shouldTranslate';
import { mapColumns } from './mapColumns';
import { defaultColumnProps } from './defaultColumnProps';
import { mapTasks } from './mapTasks';
import { translateCommonKeys } from './translateCommonKeys';
import { getCommonTranslation } from './getCommonTranslation';

export type DataLoaderFacet = ReturnType<typeof createLoaderFacet>;

type LoaderContext = {
    dataCache: Record<string, any>;
};

export function createLoaderFacet(this: DataServiceContext) {
    const context: LoaderContext = {
        dataCache: {},
    };

    return {
        ...context,
        loadGroupShallow: loadGroupShallow.bind(this),
        loadGroupDeep: loadGroupDeep.bind(this),
        loadJson: loadJson.bind(this),
        shouldTranslate: shouldTranslate.bind(this),
        mapColumns: mapColumns.bind(this),
        defaultColumnProps: defaultColumnProps.bind(this),
        mapTasks: mapTasks.bind(this),
        translateCommonKeys: translateCommonKeys.bind(this),
        getCommonTranslation: getCommonTranslation.bind(this),
    };
}
