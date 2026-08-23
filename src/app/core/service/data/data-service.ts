import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AsyncSubject } from 'rxjs';

import { ElectronService } from '@service/electron/electron.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { MarkService } from '@service/mark/mark.service';
import { SaveStoreService } from '@service/store/save-store.service';

import type { DataApplyFacet } from './apply/_data.apply';
import { createApplyFacet } from './apply/_data.apply';
import type { DataGroupFacet } from './group/_data.group';
import { createGroupFacet } from './group/_data.group';
import type { DataGetFacet } from './get/_data.get';
import { createGetFacet } from './get/_data.get';
import type { DataLinkFacet } from './link/_data.link';
import { createLinkFacet } from './link/_data.link';
import type { DataLoaderFacet } from './loader/_data.loader';
import { createLoaderFacet } from './loader/_data.loader';
import type { DataTaskFacet } from './task/_data.task';
import { createTaskFacet } from './task/_data.task';
import { initializeData } from './init/initializeData';
import { initializeService } from './init/initializeService';
import type { DataServiceContext } from './types';

@Injectable({
    providedIn: 'root'
})
export class DataService implements DataServiceContext {
    svcTranslate = inject(TranslateService);
    svcElectron = inject(ElectronService);
    svcConfig = inject(ConfigStoreService);
    svcMark = inject(MarkService);
    svcSave = inject(SaveStoreService);

    data: DataServiceContext['data'];
    whenLoaded$: DataServiceContext['whenLoaded$'] = new AsyncSubject<void>();

    constructor() {
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
