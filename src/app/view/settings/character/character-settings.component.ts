import { Component, Input } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { ElectronService } from '@service/electron/electron.service';
import { Settings } from '../settings.d';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-character-settings',
    templateUrl: './character-settings.component.html'
})
export class CharacterSettingsComponent {
    @Input() settings: Settings;

    languages = [
        { short: 'en', long: 'English' },
        { short: 'fr', long: 'French' },
    ];

    startingClasses: string[] = [
        'Arcanist',
        'Archer',
        'Conjurer',
        'Gladiator',
        'Lancer',
        'Marauder',
        'Pugilist',
        'Rogue',
        'Thaumaturge',
    ];

    constructor(
        public parent: SettingsComponent,
        private svcData: DataService,
        private svcElectron: ElectronService
    ) {
    }

    onChangeLanguage(): void {
        this.parent.onChangeStringSetting(this.settings.lang);
        location.reload();
    }

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
            // default: TODO: why was there a default
            //     gridania.changeCompletionFlag(Completion.Y, true);
            //     gridania.changeCompletionFlag(Completion.N, true);
        }

        this.svcData.applyDataToStore();
    }

    onNewSaveClick(): void {
        const confirmed = this.svcElectron.ipcRenderer.sendSync('new-save');
        if(confirmed) location.reload();
    }

    onLoadSaveClick(): void {
        const confirmed = this.svcElectron.ipcRenderer.sendSync('load-save');
        if(confirmed) location.reload();
    }
}
