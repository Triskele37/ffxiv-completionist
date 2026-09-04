import type { AfterViewInit, OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Toast } from 'primeng/toast';

import { ActiveHelpComponent } from '@component/active-help/active-help.component';
import { ChainViewerComponent } from '@component/chain-viewer/chain-viewer.component';
import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';
import { NavBarComponent } from '@component/nav-bar/nav-bar.component';
import { NavDrawerComponent } from '@component/nav-drawer/nav-drawer.component';
import { SearchBarComponent } from '@component/search-bar/search-bar.component';
import { SummaryHeaderComponent } from '@component/summary-header/summary-header.component';
import { DataService } from '@service/data/data-service';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { MainContentComponent } from '@view/main-content/main-content.component';

import { ChainService } from '@service/chain/chain.service';
import { ThemeService } from '@service/theme/theme.service';

@Component({
    selector: 'com-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        ButtonDirective,
        Toast,
        TranslatePipe,
        MainContentComponent,
        NavBarComponent,
        NavDrawerComponent,
        SearchBarComponent,
        SummaryHeaderComponent,
        ChainViewerComponent,
        ActiveHelpComponent
    ]
})
export class AppComponent implements OnInit, AfterViewInit {
    private translate = inject(TranslateService);
    private svcElectron = inject(ElectronService);
    private svcData = inject(DataService);
    private svcBookmark = inject(BookmarkService);
    private svcCustomContent = inject(CustomContentService);
    private svcSaveStore = inject(SaveStoreService);
    private svcTheme = inject(ThemeService);
    private svcChain = inject(ChainService);
    svcChainViewer = inject(ChainViewerService);

    loading: boolean = true;
    modalText: string = 'Loading...';
    version: string = '';

    activeHelpEnabled = false;

    ngOnInit(): void {
        try {
            // Must occur before data to load markings properly
            this.svcCustomContent.initializeCustomContent();

            this.svcData.initializeService();

            // Must occur after data for migration change
            this.svcBookmark.initializeBookmarks();

            this.version = this.svcSaveStore.data?.version ?? '';

            this.loading = false;
        }
        catch(e) {
            this.modalText = 'An error has occurred...';
            console.error(e);
        }

        // Keep window title synced
        this.translate.get('APP.NAME').subscribe((title) => {
            document.title = `${title} - ${this.svcSaveStore.data?.version}`;
        });
    }

    ngAfterViewInit(): void {
        // Hide the loading splash and show the main window
        this.svcElectron.sendSync(IPC_EVENT.APP_READY);
        this.svcElectron.setAppReady();
    }

    toggleActiveHelp(): void {
        this.activeHelpEnabled = !this.activeHelpEnabled;
    }

}
