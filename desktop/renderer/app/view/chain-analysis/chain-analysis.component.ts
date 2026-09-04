import type { OnInit } from '@angular/core';
import { Component, signal, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Table } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import type { Task } from '@model/Task';
import type { ChainConstraint, ChainIssue } from '@model/Chain/ChainConstraint';
import { validateConstraint } from '@model/Chain/validate/validateConstraint';
import { asChainIssue } from '@model/Chain/asChainIssue';
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
        TableService // because of completion cells
    ],
    styleUrls: ['./chain-analysis.component.scss']
})
export class ChainAnalysisComponent implements OnInit {
    private svcData = inject(DataService);
    private svcChain = inject(ChainService);
    private svcChainViewer = inject(ChainViewerService);
    svcSettings = inject(SettingsService);

    constraints: ChainConstraint[] = [];
    issues = signal<ChainIssue[]>([]);
    isLoading = signal(false);

    constructor() {
        this.svcData.data.onUpdated$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.analyzeChainedTasks());
    }

    ngOnInit() {
        this.constraints = this.svcChain.constraint.getGroupConstraints(this.svcData.data);
        this.analyzeChainedTasks();
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
            this.issues.update(() => {
                const issues = [];

                for(const constraint of this.constraints) {
                    if(!validateConstraint(constraint)) {
                        issues.push(asChainIssue(constraint));
                    }
                }

                this.isLoading.set(false);

                return issues;
            });
        });
    }

    onOpenChainViewer(task: Task): void {
        this.svcChainViewer.openChainViewer(task);
    }
}
