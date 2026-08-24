import { Injectable, signal, inject } from '@angular/core';

import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { DataService } from '@service/data/data-service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

import type { TableFilterFacet } from './filter/_table.filter';
import { createFilterFacet } from './filter/_table.filter';
import type { TableRowGroupFacet } from './rowGroup/_table.rowGroup';
import { createRowGroupFacet } from './rowGroup/_table.rowGroup';
import type { TableOrderFacet } from './order/_table.order';
import { createOrderFacet } from './order/_table.order';
import type { TablePropertyFacet } from './property/_table.property';
import { createPropertyFacet } from './property/_table.property';
import type { TableSelectionFacet } from './selection/_table.selection';
import { createSelectionFacet } from './selection/_table.selection';
import type * as TableType from './types';

@Injectable()
export class TableService implements TableType.TableServiceContext {
    svcConfig = inject(ConfigStoreService);
    svcCustomContent = inject(CustomContentService);
    svcData = inject(DataService);
    svcNavigation = inject(NavigationService);
    svcSearch = inject(SearchService);

    group = signal<DataGroup>(createDummyGroup());
    originalTasks: Task[] = [];
    tasks = signal<Task[]>([]);
    uniqueValues: TableType.UniqueValues = {};

    hasNumericColumns = false;

    constructor() {
        this.filter.initContext();
    }

    readonly property: TablePropertyFacet = createPropertyFacet.call(this);
    readonly filter: TableFilterFacet = createFilterFacet.call(this);
    readonly order: TableOrderFacet = createOrderFacet.call(this);
    readonly rowGroup: TableRowGroupFacet = createRowGroupFacet.call(this);
    readonly selection: TableSelectionFacet = createSelectionFacet.call(this);
}
