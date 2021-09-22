import { Component, Input } from '@angular/core';
import { StoreService } from '../../../services/store/store.service';

@Component({
    selector: 'xiv-quick-mark-dropdown',
    templateUrl: './quick-mark-dropdown.component.html'
})
export class QuickMarkDropdownComponent {
    @Input() filteredTasks;

    dropdownOpen = false;
    lastChanged = [];

    constructor(private svcStore: StoreService) {
    }

    onChangeTaskCompletion(from, to) {
        this.lastChanged = [];

        let first = true;
        for(const id in this.filteredTasks) {
            if(this.filteredTasks.hasOwnProperty(id)) {
                const task = this.filteredTasks[id];

                if((from === '$' && task.selected) || task.completionFlag === from) {
                    this.lastChanged.push({ task, oldFlag: task.completionFlag });

                    task.changeCompletionFlag(to, first);
                    first = false;
                }
            }
        }

        this.svcStore.applyDataToStore();
    }

    onUndoLastChange() {
        this.lastChanged.forEach((changed, index) => {
            changed.task.changeCompletionFlag(changed.oldFlag, index === 0);
        });

        this.svcStore.applyDataToStore();
        this.lastChanged = [];
    }
}
