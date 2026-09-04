import type { TranslateService } from '@ngx-translate/core';
import type { AsyncSubject } from 'rxjs';

import type { DataGroup } from '@model/DataGroup';
import type { ElectronService } from '@service/electron/electron.service';
import type { ConfigStoreService } from '@service/store/config-store.service';
import type { MarkService } from '@service/mark/mark.service';
import type { SaveStoreService } from '@service/store/save-store.service';

import type { DataApplyFacet } from './apply/_data.apply';
import type { DataGroupFacet } from './group/_data.group';
import type { DataGetFacet } from './get/_data.get';
import type { DataIndexingFacet } from './indexing/_data.indexing';
import type { DataLinkFacet } from './link/_data.link';
import type { DataLoaderFacet } from './loader/_data.loader';
import type { DataTaskFacet } from './task/_data.task';

// The shared service properties
export interface DataServiceContext {
    // Service injections
    svcTranslate: TranslateService;
    svcElectron: ElectronService;
    svcConfig: ConfigStoreService;
    svcMark: MarkService;
    svcSave: SaveStoreService;

    // Top-level
    data: DataGroup;
    whenLoaded$: AsyncSubject<void>;

    // Facet containers
    apply: DataApplyFacet;
    group: DataGroupFacet;
    get: DataGetFacet;
    index: DataIndexingFacet;
    link: DataLinkFacet;
    loader: DataLoaderFacet;
    task: DataTaskFacet;
}
