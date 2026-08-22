import { Component, OnInit, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Divider } from 'primeng/divider';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

type Modifications = string[];
type TranslateUpdates = {
    ADD: Modifications,
    CHANGE: Modifications,
    FIX: Modifications,
    REMOVE: Modifications
};

type UiUpdate = {
    name: string;
    expanded: boolean;
    additions: string[];
    changes: string[];
    fixes: string[];
    removals: string[];
};

@Component({
    selector: 'com-patch-notes',
    templateUrl: './patch-notes.component.html',
    imports: [
        NgTemplateOutlet,
        TranslatePipe,
        Divider,
        Tabs,
        TabList,
        Tab,
        TabPanels,
        TabPanel
    ],
    styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent implements OnInit {
    svcTranslate = inject(TranslateService);

    appUpdates: UiUpdate[] = [];
    gameUpdates: UiUpdate[] = [];

    ngOnInit() {
        this.appUpdates = this.getPatches('APP_UPDATES');
        this.gameUpdates = this.getPatches('GAME_UPDATES');
    }

    /**
     * Get modifies version of translate object
     * - reversed to show latest first
     * */
    getPatches(translateKey: string): UiUpdate[] {
        const translateObj = this.svcTranslate.instant(translateKey);

        return Object.keys(translateObj)
            .map((key, i, keys) => {
                const value: TranslateUpdates = translateObj[key];
                return {
                    name: key,
                    expanded: i === keys.length - 1,
                    additions: value.ADD ?? [],
                    changes: value.CHANGE ?? [],
                    fixes: value.FIX ?? [],
                    removals: value.REMOVE ?? [],
                } as UiUpdate;
            })
            .reverse();
    }
}
