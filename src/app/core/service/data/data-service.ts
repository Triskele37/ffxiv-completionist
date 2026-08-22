import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AsyncSubject } from 'rxjs';

import { ElectronService } from '@service/electron/electron.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { MarkService } from '@service/mark/mark.service';
import { SaveStoreService } from '@service/store/save-store.service';

import { createApplyFacet, DataApplyFacet } from './apply/_data.apply';
import { createGroupFacet, DataGroupFacet } from './group/_data.group';
import { createGetFacet, DataGetFacet } from './get/_data.get';
import { createLinkFacet, DataLinkFacet } from './link/_data.link';
import { createLoaderFacet, DataLoaderFacet } from './loader/_data.loader';
import { createTaskFacet, DataTaskFacet } from './task/_data.task';
import { initializeData } from './init/initializeData';
import { initializeService } from './init/initializeService';
import { DataServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class DataService implements DataServiceContext {
    data: DataServiceContext['data'];
    whenLoaded$: DataServiceContext['whenLoaded$'] = new AsyncSubject<void>();

    constructor(
        public svcTranslate: TranslateService,
        public svcElectron: ElectronService,
        public svcConfig: ConfigStoreService, // needs to be here to load lang right
        public svcMark: MarkService,
        public svcSave: SaveStoreService,
    ) {
        this.data = initializeData.call(this);
    }

    initializeService = initializeService.bind(this);

    readonly apply: DataApplyFacet = createApplyFacet.call(this);
    readonly group: DataGroupFacet = createGroupFacet.call(this);
    readonly get: DataGetFacet = createGetFacet.call(this);
    readonly link: DataLinkFacet = createLinkFacet.call(this);
    readonly loader: DataLoaderFacet = createLoaderFacet.call(this);
    readonly task: DataTaskFacet = createTaskFacet.call(this);
}
