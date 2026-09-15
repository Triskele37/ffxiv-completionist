import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from 'primeng/button';

import type { DataGroup } from '@model/DataGroup';
import { ChainService } from '@service/chain/chain.service';
import { DataService } from '@service/data/data-service';

@Component({
    selector: 'com-dev-tools',
    templateUrl: './dev-tools.component.html',
    styleUrls: ['./dev-tools.component.scss'],
    imports: [
        FormsModule,
        ButtonDirective,
    ]
})
export class DevToolsComponent {
    private svcChain = inject(ChainService);
    private svcData = inject(DataService);

    group: DataGroup;

    constructor() {
        this.group = this.svcData.data;
    }

    // This runs through every task changing its completion to ensure no links are broken
    first = true;

    testAllChains() {
        this.dive(this.svcData.data);
    }

    dive(group: DataGroup | null) {
        if(!group) return;

        for(const [, subGroup] of group.subGroups ?? []) {
            this.dive(subGroup);
        }

        for(const task of group.tasks ?? []) {
            try {
                if(task.isNumericCompletion) {
                    if(task.completionFlag$() !== task.defaultCompletion.toString()) {
                        this.svcChain.changeCompletion(task, task.defaultCompletion);
                    }
                    this.svcChain.changeCompletion(task, task.maxValue.toString());
                    this.svcChain.changeCompletion(task, task.minValue.toString());
                }
                else {
                    if(task.completionFlag$() !== 'N') {
                        this.svcChain.changeCompletion(task, 'N');
                    }
                    this.svcChain.changeCompletion(task, 'Y', this.first);
                    this.svcChain.changeCompletion(task, 'N');
                }
            }
            catch(e) {
                console.error(group.fullStorageKey, task.name, e);
            }
            this.first = false;
        }
    }
}
