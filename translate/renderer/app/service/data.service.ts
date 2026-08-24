import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Lang } from '@constant/Lang';

import { diveForKey } from '@model/diveForKey';
import { Issue } from '@model/Issue';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    svcElectron = inject(ElectronService);

    sourceLang: Lang = Lang.EN;
    targetLang: Lang = Lang.FR;

    verified: any = {};
    allI18nIssues: Issue[] = [];
    i18nIssues: Issue[] = [];
    allDataIssues: Issue[] = [];
    dataIssues: Issue[] = [];
    allIssues: Issue[] = [];

    issues: WritableSignal<Issue[]> = signal([]);

    constructor() {
        this.getIssues();
    }

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

    private getVerified(): void {
        this.verified = this.svcElectron.sendSync(IPC_EVENT.GET_VERIFIED, this.targetLang);
    }

    getIssues(): void {
        this.getVerified();
        this.getI18nIssues();
        this.getDataIssues();
        this.allIssues = [...this.allI18nIssues, ...this.allDataIssues];
        this.issues.set([...this.i18nIssues, ...this.dataIssues]);
    }

    private getI18nIssues(): void {
        this.allI18nIssues = this.svcElectron.sendSync(
            IPC_EVENT.COMPARE_I18N,
            this.sourceLang,
            this.targetLang,
        );

        this.i18nIssues = this.filterVerified(this.allI18nIssues);
    }

    private getDataIssues(): void {
        this.allDataIssues = this.svcElectron.sendSync(
            IPC_EVENT.COMPARE_DATA,
            this.sourceLang,
            this.targetLang,
        );

        this.dataIssues = this.filterVerified(this.allDataIssues);
    }

    private filterVerified(issues: Issue[]): Issue[] {
        return issues.filter((issue) => !diveForKey(this.verified, issue.key, false));
    }

    saveReasons(index: number, reasons: string[]): boolean {
        const success: boolean = this.svcElectron.sendSync(
            IPC_EVENT.SAVE_VERIFIED,
            { lang: this.targetLang, issue: this.issues()[index], reasons }
        );

        if(success) {
            this.issues.update((issues) => {
                issues.splice(index, 1)
                return issues;
            });
        }

        return success;
    }
}
