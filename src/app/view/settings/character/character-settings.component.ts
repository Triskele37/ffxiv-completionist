import type { OnInit} from '@angular/core';
import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { Checkbox } from 'primeng/checkbox';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Select } from 'primeng/select';
import { Tooltip } from 'primeng/tooltip';

import { Completion, Lang } from '@constant';
import { ChainOverlayComponent } from '@component/overlay/chain-overlay/chain-overlay.component';
import type { Task } from '@model/Task';
import { ChainService } from '@service/chain/chain.service';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

import { SettingsService } from "../settings.service";

type ShortLong = {
    short: string;
    long: string;
};

@Component({
    selector: 'com-character-settings',
    templateUrl: './character-settings.component.html',
    imports: [
        ButtonDirective,
        ButtonGroup,
        Checkbox,
        FormsModule,
        ProgressSpinner,
        Select,
        Tooltip,
        TranslatePipe,

        ChainOverlayComponent
    ],
    styleUrls: ['./character-settings.component.scss']
})
export class CharacterSettingsComponent implements OnInit {
    private translate = inject(TranslateService);
    private svcChain = inject(ChainService);
    private svcData = inject(DataService);
    private svcElectron = inject(ElectronService);
    private svcMark = inject(MarkService);
    svcSettings = inject(SettingsService);

    ngOnInit(): void {
        const LANGUAGES = 'APP.SETTING.LANGUAGE';
        this.languages = [
            { short: Lang.EN, long: this.translate.instant(`${LANGUAGES}.ENGLISH`) },
            { short: Lang.FR, long: this.translate.instant(`${LANGUAGES}.FRENCH`) },
        ];

        const CLASSES = 'GAME.CLASS_JOB';
        this.startingClasses = [
            { short: 'Arcanist', long: this.translate.instant(`${CLASSES}.ACN`) },
            { short: 'Archer', long: this.translate.instant(`${CLASSES}.ARC`) },
            { short: 'Conjurer', long: this.translate.instant(`${CLASSES}.CNJ`) },
            { short: 'Gladiator', long: this.translate.instant(`${CLASSES}.GLA`) },
            { short: 'Lancer', long: this.translate.instant(`${CLASSES}.LNC`) },
            { short: 'Marauder', long: this.translate.instant(`${CLASSES}.MRD`) },
            { short: 'Pugilist', long: this.translate.instant(`${CLASSES}.PGL`) },
            { short: 'Thaumaturge', long: this.translate.instant(`${CLASSES}.THM`) },
        ];

        this.svcSettings.onChainingEnabled$.subscribe(this.chainStartingClass.bind(this));
    }

    //#region------------------------------------------------------- Modal
    isModalVisible = signal(false);
    isReloadVisible = signal(false);

    showModal(callback: () => boolean | void): void {
        this.isModalVisible.set(true);

        // Gives time for the UI to add the modal
        setTimeout(() => {
            this.isModalVisible.set(!!callback());
        }, 100);
    }

    //#endregion

    //#region------------------------------------------------------- Language
    languages?: ShortLong[];

    onChangeLanguage(): void {
        this.svcSettings.onChangeStringSetting(this.svcSettings.settings.lang);
        this.isModalVisible.set(true);
        this.isReloadVisible.set(true);
        this.svcElectron.reloadApp();
    }

    //#endregion

    //#region------------------------------------------------------- Short names
    onUseShortNamesChange(): void {
        this.svcSettings.onChangeBoolSetting(this.svcSettings.settings.useShortNames);
        this.isModalVisible.set(true);
        this.isReloadVisible.set(true);
        this.svcElectron.reloadApp();
    }

    //#endregion

    //#region------------------------------------------------------- Starting Class
    startingClasses?: ShortLong[];

    onChangeStartingClass(): void {
        this.svcChain.force = true;
        this.svcSettings.onChangeStringSetting(this.svcSettings.settings.startingClass);
        this.chainStartingClass();
        this.svcChain.force = false;
    }

    chainStartingClass(): void {
        const gridania = this.svcData.get.getTask('q.65660');
        const limsa = this.svcData.get.getTask('q.65645');
        const uldah = this.svcData.get.getTask('q.66106');

        if(!gridania || !limsa || !uldah) {
            console.error('Failed to retrieve starting city');
            return;
        }

        // Not clearing state first makes for botched chains
        this.clearStartingZone(gridania, limsa, uldah);

        let pre;
        switch(this.svcSettings.settings.startingClass.value) {
            case 'Archer':
            case 'Lancer':
            case 'Conjurer':
                pre = this.svcData.get.getTask('q.65575');
                if(!pre) return;
                this.setAsStartingZone(gridania, pre);
                break;
            case 'Marauder':
            case 'Arcanist':
                pre = this.svcData.get.getTask('q.65643');
                if(!pre) return;
                this.setAsStartingZone(limsa, pre);
                break;
            case 'Gladiator':
            case 'Pugilist':
            case 'Thaumaturge':
                pre = this.svcData.get.getTask('q.66130');
                if(!pre) return;
                this.setAsStartingZone(uldah, pre);
                break;
        }

        // Must be done after exclusive sets
        this.excludeStartingClassQuest(this.svcSettings.settings.startingClass.value);

        this.svcData.apply.dataToStore();
    }

    setAsStartingZone(exclusive: Task, pre: Task): void {
        // Toggle the flag to trigger chaining
        this.svcChain.current.changeCompletion(exclusive, Completion.Y, true);
        this.svcMark.setCompletion(exclusive, Completion.N);

        // Undo the cPrev chain
        this.svcMark.setCompletion(pre, Completion.N);
    }

    excludeStartingClassQuest(startingClass?: string): void {
        if(!startingClass) return;

        [
            { name: 'Archer', path: 'q.65755' },
            { name: 'Lancer', path: 'q.65754' },
            { name: 'Conjurer', path: 'q.65747' },
            { name: 'Marauder', path: 'q.65848' },
            { name: 'Arcanist', path: 'q.65990' },
            { name: 'Gladiator', path: 'q.65822' },
            { name: 'Pugilist', path: 'q.66089' },
            { name: 'Thaumaturge', path: 'q.65882' },
        ].forEach(({ name, path }) => {
            const task = this.svcData.get.getTask(path);
            if(!task) {
                console.error('Failed to get starting quest');
                return;
            }

            if(startingClass === name) {
                if(task.completionFlag$() !== Completion.X) {
                    this.svcChain.current.pushChained({
                        task,
                        fromFlag: task.completionFlag$(),
                        toFlag: Completion.X
                    });

                    this.svcMark.setCompletion(task, Completion.X);
                }
            }
            else if(task.completionFlag$() === Completion.X) {
                this.svcChain.current.pushChained({
                    task,
                    fromFlag: task.completionFlag$(),
                    toFlag: Completion.N
                });

                this.svcMark.setCompletion(task, Completion.N);
            }
        });
    }

    clearStartingZone(gridania: Task, limsa: Task, uldah: Task): void {
        // The current flag cannot be N for the first zone to trigger chains properly
        if(gridania.completionFlag$() === Completion.N) {
            this.svcMark.setCompletion(gridania, Completion.Y);
        }

        // firstInChain must be true for the first zone to be cleared
        this.svcChain.current.changeCompletion(gridania, Completion.N, true);
        this.svcChain.current.changeCompletion(limsa, Completion.N);
        this.svcChain.current.changeCompletion(uldah, Completion.N);
    }

    //#endregion

    //#region------------------------------------------------------- Change Save
    onNewSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.sendSync(IPC_EVENT.NEW_SAVE);
            if(confirmed) {
                this.isReloadVisible.set(true);
                this.svcElectron.reloadApp();
            }
            return confirmed;
        });
    }

    onLoadSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.sendSync(IPC_EVENT.LOAD_SAVE);
            if(confirmed) {
                this.isReloadVisible.set(true);
                this.svcElectron.reloadApp();
            }
            return confirmed;
        });
    }

    //#endregion

    //#region------------------------------------------------------- Open Folder
    onOpenConfigClick(): void {
        this.svcElectron.sendSync(IPC_EVENT.OPEN_CONFIG);
    }

    onOpenSaveClick(): void {
        this.svcElectron.sendSync(IPC_EVENT.OPEN_SAVE);
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
            this.svcElectron.sendSync(IPC_EVENT.BACKUP_CONFIG);
            return this.isBackingUpBoth;
        });
    }

    onBackupSaveClick(): void {
        this.showModal(() => {
            this.svcElectron.sendSync(IPC_EVENT.BACKUP_SAVE);
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
            const confirmed = this.svcElectron.sendSync(IPC_EVENT.LOAD_BACKUP_CONFIG);
            if(confirmed) {
                this.isReloadVisible.set(true);
                this.svcElectron.reloadApp();
            }
            return confirmed;
        });
    }

    onLoadBackupSaveClick(): void {
        this.showModal(() => {
            const confirmed = this.svcElectron.sendSync(IPC_EVENT.LOAD_BACKUP_SAVE);
            if(confirmed) {
                this.isReloadVisible.set(true);
                this.svcElectron.reloadApp();
            }
            return confirmed;
        });
    }

    //#endregion

}
