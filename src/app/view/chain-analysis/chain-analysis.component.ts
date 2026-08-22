import { Component, OnInit, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Table } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@data';
import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import { Task } from '@model/Task';
import { validateConstraint } from '@model/ValidateChain/validate/validateConstraint';
import { asChainIssue } from '@model/ValidateChain/util/asChainIssue';
import { getChainConstraints } from '@model/ValidateChain/getChainConstraints';
import { ChainConstraint, ChainIssue } from '@model/ValidateChain/types';
import { SettingsService } from '@view/settings/settings.service';

@Component({
    selector: 'com-chain-analysis',
    templateUrl: './chain-analysis.component.html',
    imports: [
        FormsModule,
        TranslatePipe,
        ButtonDirective,
        ProgressSpinner,
        ToggleSwitch,
        Table,
        Tooltip,

        ContentLinkComponent,
        CompleteCellComponent,
        NgTemplateOutlet,
    ],
    styleUrls: ['./chain-analysis.component.scss']
})
export class ChainAnalysisComponent implements OnInit {
    constraints: ChainConstraint[] = [];
    issues: ChainIssue[] = [];
    isLoading = signal(false);

    constructor(
        private svcData: DataService,
        private svcChainViewer: ChainViewerService,
        public svcSettings: SettingsService
    ) {
    }

    ngOnInit() {
        this.isLoading.set(true);
        setTimeout(() => {
            this.constraints = getChainConstraints(this.svcData.data);
            this.analyzeChainedTasks();
            this.isLoading.set(false);
        });
    }

    onChainingEnabledChange(): void {
        this.svcSettings.onChangeBoolSetting(this.svcSettings.settings.chainingEnabled);
        if(this.svcSettings.settings.chainingEnabled.value) {
            this.svcSettings.onChainingEnabled$.next();
        }
    }

    analyzeChainedTasks(): void {
        this.issues = [];

        for(const constraint of this.constraints) {
            if(!validateConstraint(constraint)) {
                this.issues.push(asChainIssue(constraint));
            }
        }
    }

    onChange(): void {
        this.analyzeChainedTasks();
    }

    onOpenChainViewer(task: Task): void {
        this.svcChainViewer.openChainViewer(task);
    }
}
