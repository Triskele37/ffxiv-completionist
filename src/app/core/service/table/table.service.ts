import { Injectable, signal } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { DataService } from '@service/data/data-service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

import { createFilterFacet, TableFilterFacet } from './filter/_table.filter';
import { createRowGroupFacet, TableRowGroupFacet } from './rowGroup/_table.rowGroup';
import { createOrderFacet, TableOrderFacet } from './order/_table.order';
import { createPropertyFacet, TablePropertyFacet } from './property/_table.property';
import { createSelectionFacet, TableSelectionFacet } from './selection/_table.selection';
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
        public svcConfig: ConfigStoreService,
        public svcCustomContent: CustomContentService,
        public svcData: DataService,
        public svcNavigation: NavigationService,
        public svcSearch: SearchService,
    ) {
        this.filter.initContext();
    }

    readonly property: TablePropertyFacet = createPropertyFacet.call(this);
    readonly filter: TableFilterFacet = createFilterFacet.call(this);
    readonly order: TableOrderFacet = createOrderFacet.call(this);
    readonly rowGroup: TableRowGroupFacet = createRowGroupFacet.call(this);
    readonly selection: TableSelectionFacet = createSelectionFacet.call(this);
}
