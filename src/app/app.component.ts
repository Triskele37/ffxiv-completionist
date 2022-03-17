import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
    loading = true;
    modalText = 'Loading...';

    constructor(
        private electronService: ElectronService,
        private translate: TranslateService,
        private svcData: DataService,
        private svcBookmark: BookmarkService,
        private svcCustomTask: CustomTaskService,
        private svcTheme: ThemeService, // inits theme
        private svcChain: ChainService // inits chain
    ) {
        this.translate.setDefaultLang('en');

        // if(electronService.isElectron) {
        //     console.log('Run in electron');
        //     console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
        //     console.log('NodeJS childProcess', this.electronService.childProcess);
        // }
        // else {
        //     console.log('Run in browser');
        // }
    }

    ngOnInit() {
        this.loading = true;

        try {
            this.svcBookmark.initializeBookmarks();
            this.svcCustomTask.initializeCustomTasks();
            this.svcData.initializeData();

            setTimeout(() => this.loading = false, 1);
        }
        catch(e) {
            this.modalText = 'An error has occurred...';
            console.error(e);
        }
    }
}
