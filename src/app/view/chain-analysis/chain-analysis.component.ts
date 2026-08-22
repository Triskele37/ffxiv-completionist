import { Component, OnInit, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Table } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import { Task } from '@model/Task';
import { ChainConstraint, ChainIssue } from '@model/Chain/ChainConstraint';
import { validateConstraint } from '@model/Chain/validate/validateConstraint';
import { asChainIssue } from '@model/Chain/util/asChainIssue';
import { ChainService } from '@service/chain/chain.service';
import { DataService } from '@service/data/data-service';
import { TableService } from '@service/table/table.service';
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
    providers: [
        TableService
    ],
    styleUrls: ['./chain-analysis.component.scss']
})
export class ChainAnalysisComponent implements OnInit {
    constraints: ChainConstraint[] = [];
    issues: ChainIssue[] = [];
    isLoading = signal(false);

    constructor(
        private svcData: DataService,
        private svcChain: ChainService,
        private svcChainViewer: ChainViewerService,
        public svcSettings: SettingsService,
        public svcTable: TableService,
    ) {
    }

    ngOnInit() {
        this.constraints = this.svcChain.constraint.getGroupConstraints(this.svcData.data);
        this.analyzeChainedTasks();

        this.svcTable.filter.onFilterApplied$.subscribe(() => {
            this.analyzeChainedTasks();
        });
    }

    onChainingEnabledChange(): void {
        this.svcSettings.onChangeBoolSetting(this.svcSettings.settings.chainingEnabled);
        if(this.svcSettings.settings.chainingEnabled.value) {
            this.svcSettings.onChainingEnabled$.next();
        }
    }

    analyzeChainedTasks(): void {
        this.isLoading.set(true);

        setTimeout(() => {
            this.issues = [];

            for(const constraint of this.constraints) {
                if(!validateConstraint(constraint)) {
                    this.issues.push(asChainIssue(constraint));
                }
            }

            this.isLoading.set(false);
        });
    }

    onOpenChainViewer(task: Task): void {
        this.svcChainViewer.openChainViewer(task);
    }
}
