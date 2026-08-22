import { WritableSignal } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { DataService } from '@service/data/data-service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

import type { TableFilterFacet } from './filter/_table.filter';
import type { TableOrderFacet } from './order/_table.order';
import type { TablePropertyFacet } from './property/_table.property';
import type { TableRowGroupFacet } from './rowGroup/_table.rowGroup';
import type { TableSelectionFacet } from './selection/_table.selection';

// The shared service properties
export interface TableServiceContext {
    // Service injections
    svcConfig: ConfigStoreService;
    svcCustomContent: CustomContentService;
    svcData: DataService;
    svcNavigation: NavigationService;
    svcSearch: SearchService;

    // Top-level service context
    group: WritableSignal<DataGroup>;
    originalTasks: Task[];
    tasks: WritableSignal<Task[]>;
    uniqueValues: UniqueValues;

    hasNumericColumns: boolean;

    // Facet containers
    property: TablePropertyFacet;
    filter: TableFilterFacet;
    order: TableOrderFacet;
    rowGroup: TableRowGroupFacet;
    selection: TableSelectionFacet;
}

export type UniqueValues = {
    [key: string]: string[];
};
