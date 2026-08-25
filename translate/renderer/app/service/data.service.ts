import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Lang } from '@constant/Lang';

import { diveForKey } from '@model/diveForKey';
import { Issue, IssueType } from '@model/Issue';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

export type FilterView = 'ISSUES' | 'VERIFIED' | 'TRANSLATED' | 'STALE';
type COUNT_KEY = FilterView | IssueType;

const getNewCounts = () => ({
    ISSUES: 0,
    VERIFIED: 0,
    TRANSLATED: 0,
    STALE: 0,
    MISSING_FILE: 0,
    UNTRANSLATED: 0,
    MISSING_DATA_KEY: 0,
    EXTRA_DATA_KEY: 0,
    EXTRA_VERIFIED_KEY: 0,
});

@Injectable({
    providedIn: 'root'
})
export class DataService {
    svcElectron = inject(ElectronService);

    sourceLang: Lang = Lang.EN;
    targetLang: Lang = Lang.FR;

    verified: any = {};

    allIssues: Issue[] = [];
    issues: WritableSignal<Issue[]> = signal([]);

    filterView: FilterView = 'ISSUES';

    filters: Record<IssueType, boolean> = {
        MISSING_FILE: true,
        UNTRANSLATED: true,
        MISSING_DATA_KEY: true,
        EXTRA_DATA_KEY: true,
        EXTRA_VERIFIED_KEY: true,
    };

    counts: WritableSignal<Record<COUNT_KEY, number>> = signal(getNewCounts());

    constructor() {
        this.getIssues();
    }

    getIssues(): void {
        this.getVerified();
        const allI18nIssues = this.getI18nIssues();
        const allDataIssues = this.getDataIssues();

        this.allIssues = [...allI18nIssues, ...allDataIssues];
        for(const issue of this.allIssues) {
            issue.reasons = diveForKey(this.verified, issue.key, false);
        }

        this.applyFilters();
    }

    saveTranslation(index: number, value: string): boolean {
        const issue = this.issues()[index];
        const success: boolean = this.svcElectron.sendSync(
            IPC_EVENT.SAVE_TRANSLATION,
            { lang: this.targetLang, issue, value }
        );

        if(success) {
            const isUndo = value === issue.target;
            if(isUndo) delete issue.newValue;
            else issue.newValue = value;
            this.applyFilters();
        }

        return success;
    }

    saveReasons(index: number): boolean {
        const success: boolean = this.svcElectron.sendSync(
            IPC_EVENT.SAVE_VERIFIED,
            { lang: this.targetLang, issue: this.issues()[index] }
        );

        if(success) this.applyFilters();

        return success;
    }

    //#region------------------------------------------------------- Lang
    setSourceLang(lang: Lang): void {
        if(this.targetLang === lang) {
            this.targetLang = this.sourceLang;
        }

        this.sourceLang = lang;
        this.getIssues();
    }

    setTargetLang(lang: Lang): void {
        this.targetLang = lang;
        this.getIssues();
    }

    //#endregion

    //#region------------------------------------------------------- Filter
    setFilterView(view: FilterView): void {
        this.filterView = view;
        this.applyFilters();
    }

    toggleFilter(issueType: IssueType): void {
        this.filters[issueType] = !this.filters[issueType];
        this.applyFilters();
    }

    applyFilters(): void {
        const counts = getNewCounts();

        this.issues.set(
            this.allIssues.filter((issue) => {
                if(issue.reasons?.length) {
                    counts.VERIFIED++;
                    if(this.filterView !== 'VERIFIED') return false;
                }
                else if(issue.newValue) {
                    counts.TRANSLATED++;
                    if(this.filterView !== 'TRANSLATED') return false;
                }
                else {
                    counts.ISSUES++;
                    if(this.filterView !== 'ISSUES') return false;
                }

                for(const issueType in this.filters) {
                    if(!this.filters[issueType as IssueType] && issue.type === issueType) {
                        return false;
                    }
                }

                counts[issue.type]++;
                return true;
            })
        );

        this.counts.set(counts);
    }

    //#endregion

    //#region------------------------------------------------------- private Data
    private getVerified(): void {
        this.verified = this.svcElectron.sendSync(IPC_EVENT.GET_VERIFIED, this.targetLang);
    }

    private getI18nIssues(): Issue[] {
        return this.svcElectron.sendSync(
            IPC_EVENT.COMPARE_I18N,
            this.sourceLang,
            this.targetLang,
        );
    }

    private getDataIssues(): Issue[] {
        return this.svcElectron.sendSync(
            IPC_EVENT.COMPARE_DATA,
            this.sourceLang,
            this.targetLang,
        );
    }

    //#endregion
}
