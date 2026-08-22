import { WritableSignal } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import type { TableFilterFacet } from './filter/table.filter';
import type { TableOrderFacet } from './order/table.order';
import type { TablePropertyFacet } from './property/table.property';
import type { TableRowGroupFacet } from './rowGroup/table.rowGroup';
import type { TableSelectionFacet } from './selection/table.selection';

// The shared service properties
export interface TableServiceContext {
    // Service injections
    svcCustomContent: CustomContentService;
    svcNavigation: NavigationService;
    svcConfig: ConfigStoreService;

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
