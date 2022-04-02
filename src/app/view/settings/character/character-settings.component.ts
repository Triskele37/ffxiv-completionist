import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Completion, Lang } from '@constant';
import { DataService } from '@data';
import { Task } from '@domain/Task';
import { ChainService } from '@service/chain/chain.service';
import { ElectronService } from '@service/electron/electron.service';

import { Settings } from '../settings';
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
        private svcChain: ChainService,
        private svcElectron: ElectronService
    ) {
    }

    ngOnInit(): void {
        const LANGUAGES = 'MAIN.SETTING.LANGUAGE';
        this.languages = [
            { short: Lang.EN, long: this.translate.instant(`${LANGUAGES}.ENGLISH`) },
            { short: Lang.FR, long: this.translate.instant(`${LANGUAGES}.FRENCH`) },
        ];

        const CLASSES = 'MAIN.SETTING.CLASSES';
        this.startingClasses = [
            { short: 'Arcanist', long: this.translate.instant(`${CLASSES}.ACN`) },
            { short: 'Archer', long: this.translate.instant(`${CLASSES}.ARC`) },
            { short: 'Conjurer', long: this.translate.instant(`${CLASSES}.CNJ`) },
            { short: 'Gladiator', long: this.translate.instant(`${CLASSES}.GLA`) },
            { short: 'Lancer', long: this.translate.instant(`${CLASSES}.LNC`) },
            { short: 'Marauder', long: this.translate.instant(`${CLASSES}.MRD`) },
            { short: 'Pugilist', long: this.translate.instant(`${CLASSES}.PUG`) },
            { short: 'Thaumaturge', long: this.translate.instant(`${CLASSES}.THM`) },
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
    startingClasses: ShortLong[];

    onChangeStartingClass(): void {
        ChainService.force = true;
        this.parent.onChangeStringSetting(this.settings.startingClass);
        this.chainStartingClass();
        ChainService.force = false;
    }

    chainStartingClass(): void {
        const msq = 'duty.quests.main-scenario.seventh-umbral-era';
        const side = 'duty.quests.sidequests';
        const gridania = this.svcData.data.getChildTask(`${msq}.gridania.65660`);
        const limsa = this.svcData.data.getChildTask(`${msq}.limsa-lominsa.65645`);
        const uldah = this.svcData.data.getChildTask(`${msq}.uldah.66106`);
        let pre;

        // Not clearing state first makes for botched chains
        this.clearStartingZone(gridania, limsa, uldah);

        switch(this.settings.startingClass.value) {
            case 'Archer': case 'Lancer': case 'Conjurer':
                pre = this.svcData.data.getChildTask(`${side}.gridanian.gridania.65575`);
                this.setAsStartingZone(gridania, pre);
                break;
            case 'Marauder': case 'Arcanist':
                pre = this.svcData.data.getChildTask(`${side}.lominsan.limsa-lominsa.65643`);
                this.setAsStartingZone(limsa, pre);
                break;
            case 'Gladiator': case 'Pugilist': case 'Thaumaturge':
                pre = this.svcData.data.getChildTask(`${side}.uldahn.uldah.66130`);
                this.setAsStartingZone(uldah, pre);
                break;
        }

        // Must be done after exclusive sets
        this.excludeStartingClassQuest(this.settings.startingClass.value);

        this.svcData.applyDataToStore();
    }

    setAsStartingZone(exclusive: Task, pre: Task): void {
        // Toggle the flag to trigger chaining
        exclusive.changeCompletion(Completion.Y, true);
        exclusive.setCompletion(Completion.N);

        // Undo the cPrev chain
        pre.setCompletion(Completion.N);
    }

    excludeStartingClassQuest(startingClass: string): void {
        const dow = 'duty.quests.class--job.disciple-of-war';
        const dom = 'duty.quests.class--job.disciple-of-magic';

        [
            { name: 'Archer', path: `${dow}.archer.65755` },
            { name: 'Lancer', path: `${dow}.lancer.65754` },
            { name: 'Conjurer', path: `${dom}.conjurer.65747` },
            { name: 'Marauder', path: `${dow}.marauder.65848` },
            { name: 'Arcanist', path: `${dom}.arcanist.65990` },
            { name: 'Gladiator', path: `${dow}.gladiator.65822` },
            { name: 'Pugilist', path: `${dow}.pugilist.66089` },
            { name: 'Thaumaturge', path: `${dom}.thaumaturge.65882` },
        ].forEach(({ name, path }) => {
            const task = this.svcData.data.getChildTask(path);

            if(startingClass === name) {
                if(task.completionFlag !== Completion.X) {
                    this.svcChain.pushChained({
                        task,
                        fromFlag: task.completionFlag,
                        toFlag: Completion.X
                    });

                    task.setCompletion(Completion.X);
                }
            }
            else if(task.completionFlag === Completion.X) {
                this.svcChain.pushChained({
                    task,
                    fromFlag: task.completionFlag,
                    toFlag: Completion.N
                });

                task.setCompletion(Completion.N);
            }
        });
    }

    clearStartingZone(gridania: Task, limsa: Task, uldah: Task): void {
        // The current flag cannot be N for the first zone to trigger chains properly
        if(gridania.completionFlag === Completion.N) gridania.setCompletion(Completion.Y);

        // firstInChain must be true for the first zone to be cleared
        gridania.changeCompletion(Completion.N, true);
        limsa.changeCompletion(Completion.N);
        uldah.changeCompletion(Completion.N);
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
