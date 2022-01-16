import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { APP_CONFIG } from '../environments/environment';

import { ElectronService } from '@service/electron/electron.service';
import { DataService } from '@data';

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
        private svcData: DataService
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
            this.svcData.initializeData();
            this.loading = false;
        }
        catch(e) {
            this.modalText = 'An error has occurred...';
            console.error(e);
        }
    }
}
