import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '@data';
import { ElectronService } from '@service/electron/electron.service';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { CustomTaskService } from '@service/custom-task/custom-task.service';

import { ChainService } from '@service/chain/chain.service';
import { ThemeService } from '@service/theme/theme.service';

@Component({
    selector: 'xiv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    loading: boolean = true;
    modalText: string = 'Loading...';

    constructor(
        private translate: TranslateService,
        private svcElectron: ElectronService,
        private svcData: DataService,
        private svcBookmark: BookmarkService,
        private svcCustomTask: CustomTaskService,
        private svcTheme: ThemeService, // inits theme
        private svcChain: ChainService // inits chain
    ) {
    }

    ngOnInit(): void {
        try {
            // Must occur before data to load markings properly
            this.svcCustomTask.initializeCustomTasks();

            this.svcData.initializeData();

            // Must occur after data for migration change
            this.svcBookmark.initializeBookmarks();

            this.loading = false;
        }
        catch(e) {
            this.modalText = 'An error has occurred...';
            console.error(e);
        }

        // Keep title lang synced
        this.translate.get('MAIN.TITLE').subscribe((title) => {
            document.title = title;
        });
    }

    ngAfterViewInit(): void {
        // Hide the loading splash and show the main window
        this.svcElectron.ipcRenderer.sendSync('app-ready');
    }

}
