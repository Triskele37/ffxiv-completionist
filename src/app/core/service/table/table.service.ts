import { Injectable, signal } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import { createFilterFacet, TableFilterFacet } from './filter/table.filter';
import { createRowGroupFacet, TableRowGroupFacet } from './rowGroup/table.rowGroup';
import { createOrderFacet, TableOrderFacet } from './order/table.order';
import { createPropertyFacet, TablePropertyFacet } from './property/table.property';
import { createSelectionFacet, TableSelectionFacet } from './selection/table.selection';
import * as TableType from './types';

@Injectable({
    providedIn: 'root'
})
export class TableService implements TableType.TableServiceContext {
    group = signal<DataGroup>(null as unknown as DataGroup);
    originalTasks: Task[] = [];
    tasks = signal<Task[]>([]);
    uniqueValues: TableType.UniqueValues = {};

    hasNumericColumns = false;

    constructor(
        public svcCustomContent: CustomContentService,
        public svcNavigation: NavigationService,
        public svcConfig: ConfigStoreService,
    ) {
        this.filter.initContext();
    }

    readonly property: TablePropertyFacet = createPropertyFacet.bind(this)();
    readonly filter: TableFilterFacet = createFilterFacet.bind(this)();
    readonly order: TableOrderFacet = createOrderFacet.bind(this)();
    readonly rowGroup: TableRowGroupFacet = createRowGroupFacet.bind(this)();
    readonly selection: TableSelectionFacet = createSelectionFacet.bind(this)();
}
