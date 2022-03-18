import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { ElectronService } from '@service/electron/electron.service';
import { Settings } from '../settings.d';
import { SettingsComponent } from '../settings.component';

type ShortLong = {
    short: string;
    long: string;
};

@Component({
    selector: 'xiv-character-settings',
    templateUrl: './character-settings.component.html',
    styleUrls: ['./character-settings.component.scss']
})
export class CharacterSettingsComponent implements OnInit {
    @Input() settings: Settings;

    constructor(
        private translate: TranslateService,
        public parent: SettingsComponent,
        private svcData: DataService,
        private svcElectron: ElectronService
    ) {
    }

    ngOnInit() {
        const LANGUAGES = 'MAIN.SETTING.LANGUAGE';
        this.languages = [
            { short: 'en', long: this.translate.instant(`${LANGUAGES}.ENGLISH`) },
            { short: 'fr', long: this.translate.instant(`${LANGUAGES}.FRENCH`) },
        ];

        const CLASSES = 'MAIN.SETTING.CLASSES';
        this.startingClasses = [
            this.translate.instant(`${CLASSES}.ACN`),
            this.translate.instant(`${CLASSES}.ARC`),
            this.translate.instant(`${CLASSES}.CNJ`),
            this.translate.instant(`${CLASSES}.GLA`),
            this.translate.instant(`${CLASSES}.LNC`),
            this.translate.instant(`${CLASSES}.MRD`),
            this.translate.instant(`${CLASSES}.PUG`),
            this.translate.instant(`${CLASSES}.ROG`),
            this.translate.instant(`${CLASSES}.THM`),
        ];
    }

    //#region------------------------------------------------------- Modal
    isModalVisible: boolean = false;

    showModal(callback: () => boolean | void): void {
        this.isModalVisible = true;

        // Gives time for the UI to add the modal
        setTimeout(() => {
            this.isModalVisible = !!callback();
        }, 100);
    }

    //#endregion

    //#region------------------------------------------------------- Language
    languages: ShortLong[];

    onChangeLanguage(): void {
        this.parent.onChangeStringSetting(this.settings.lang);
        this.isModalVisible = true;
        location.reload();
    }

    //#endregion

    //#region------------------------------------------------------- Starting Class
    startingClasses: string[];

    onChangeStartingClass(): void {
        this.parent.onChangeStringSetting(this.settings.startingClass);
        this.chainStartingClass();
    }

    chainStartingClass(): void {
        const baseQuestPath = 'duty.quests.main-scenario.seventh-umbral-era';

        const getTask = (taskPath: string, id: number) =>
            this.svcData.data.getChildGroupFromPath(taskPath).getTaskById(id);

        const gridania = getTask(`${baseQuestPath}.gridania`, 65660);
        const limsa = getTask(`${baseQuestPath}.limsa-lominsa`, 65645);
        const uldah = getTask(`${baseQuestPath}.uldah`, 66106);

        switch(this.settings.startingClass.value) {
            case 'Archer': case 'Lancer': case 'Conjurer':
                gridania.changeCompletionFlag(Completion.Y, true);
                gridania.setCompletionFlag(Completion.N);
                break;
            case 'Marauder': case 'Arcanist': case 'Rogue':
                limsa.changeCompletionFlag(Completion.Y, true);
                limsa.setCompletionFlag(Completion.N);
                break;
            case 'Gladiator': case 'Pugilist': case 'Thaumaturge':
                uldah.changeCompletionFlag(Completion.Y, true);
                uldah.setCompletionFlag(Completion.N);
                break;
        }

        this.svcData.applyDataToStore();
    }

    //#endregion

    //#region------------------------------------------------------- Change Save
    onNewSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.ipcRenderer.sendSync('new-save');
            if(confirmed) location.reload();
            return confirmed;
        });
    }

    onLoadSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.ipcRenderer.sendSync('load-save');
            if(confirmed) location.reload();
            return confirmed;
        });
    }

    //#endregion

    //#region------------------------------------------------------- Open Folder
    onOpenConfigClick(): void {
        this.svcElectron.ipcRenderer.sendSync('open-config');
    }

    onOpenSaveClick(): void {
        this.svcElectron.ipcRenderer.sendSync('open-save');
    }

    onOpenBothClick(): void {
        this.onOpenConfigClick();
        this.onOpenSaveClick();
    }

    //#endregion

    //#region------------------------------------------------------- Backup
    isBackingUpBoth: boolean = false;

    onBackupConfigClick(): void {
        this.showModal(() => {
            this.svcElectron.ipcRenderer.sendSync('backup-config');
            return this.isBackingUpBoth;
        });
    }

    onBackupSaveClick(): void {
        this.showModal(() => {
            this.svcElectron.ipcRenderer.sendSync('backup-save');
            this.isBackingUpBoth = false;
        });
    }

    onBackupBothClick(): void {
        this.isBackingUpBoth = true;

        this.onBackupConfigClick();
        this.onBackupSaveClick();
    }

    //#endregion

    //#region------------------------------------------------------- Load Backup
    onLoadBackupConfigClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.ipcRenderer.sendSync('load-backup-config');
            if(confirmed) location.reload();
            return confirmed;
        });
    }

    onLoadBackupSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.ipcRenderer.sendSync('load-backup-save');
            if(confirmed) location.reload();
            return confirmed;
        });
    }

    //#endregion

}
